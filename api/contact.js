const nodemailer = require('nodemailer');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

const json = (res, status, body) => res.status(status).json(body);

const getClientIp = (req) => {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim();
  }

  return req.socket?.remoteAddress || 'unknown';
};

const isAllowedOrigin = (req) => {
  const origin = req.headers.origin;
  if (!origin) {
    return true;
  }

  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const sameHostOrigin = host ? `https://${host}` : '';
  const localOrigin = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : '';
  const configuredOrigins = (process.env.ALLOWED_ORIGIN || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  return [sameHostOrigin, localOrigin, ...configuredOrigins].filter(Boolean).includes(origin);
};

const isRateLimited = (ip) => {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || now > current.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  rateLimitStore.set(ip, current);
  return current.count > RATE_LIMIT_MAX;
};

const sanitize = (value) => String(value || '').trim();
const escapeHtml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const validateBody = (body) => {
  const name = sanitize(body.name);
  const email = sanitize(body.email);
  const subject = sanitize(body.subject);
  const message = sanitize(body.message);
  const website = sanitize(body.website);

  if (website) {
    return { error: 'SPAM_DETECTED' };
  }

  if (name.length < 2 || name.length > 80) {
    return { error: 'INVALID_NAME' };
  }

  if (!emailPattern.test(email)) {
    return { error: 'INVALID_EMAIL' };
  }

  if (subject.length < 3 || subject.length > 120) {
    return { error: 'INVALID_SUBJECT' };
  }

  if (message.length < 10 || message.length > 1200) {
    return { error: 'INVALID_MESSAGE' };
  }

  return { data: { name, email, subject, message } };
};

const getTransporter = () => {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
};

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return json(res, 405, { ok: false, code: 'METHOD_NOT_ALLOWED' });
  }

  if (!isAllowedOrigin(req)) {
    return json(res, 403, { ok: false, code: 'FORBIDDEN_ORIGIN' });
  }

  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return json(res, 429, { ok: false, code: 'RATE_LIMITED' });
  }

  const validation = validateBody(req.body || {});
  if (validation.error) {
    return json(res, validation.error === 'SPAM_DETECTED' ? 200 : 400, {
      ok: validation.error === 'SPAM_DETECTED',
      code: validation.error,
    });
  }

  const transporter = getTransporter();
  const to = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;

  if (!transporter || !to) {
    return json(res, 503, { ok: false, code: 'MISSING_SMTP_CONFIG' });
  }

  const { name, email, subject, message } = validation.data;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

  try {
    await transporter.sendMail({
      from: `"Portfolio Marcelo" <${process.env.SMTP_USER}>`,
      to,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: [
        `Nombre: ${name}`,
        `Email: ${email}`,
        `IP: ${ip}`,
        '',
        message,
      ].join('\n'),
      html: `
        <h2>Nuevo mensaje desde el portfolio</h2>
        <p><strong>Nombre:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>IP:</strong> ${ip}</p>
        <p><strong>Asunto:</strong> ${safeSubject}</p>
        <hr />
        <p>${safeMessage}</p>
      `,
    });

    return json(res, 200, { ok: true });
  } catch (error) {
    return json(res, 500, { ok: false, code: 'EMAIL_SEND_FAILED' });
  }
};
