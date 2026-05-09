export const profile = {
  name: "Marcelo Gottardini",
  role: "Full Stack Developer",
  email: "marcelogottardini00@gmail.com",
  location: "Mendoza, Argentina",
  github: "https://github.com/Galaximar",
  linkedin: "https://www.linkedin.com/in/marcelogottardini",
  website: "marcelogottardini.vercel.app",
  availability: "Disponible para oportunidades y proyectos freelance",
};

export const navigation = [
  { label: "About", href: "#sobre-mi" },
  { label: "Experience", href: "#experiencia" },
  { label: "Projects", href: "#proyectos" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contacto" },
];

export const coreTechnologies = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "next" },
  { name: "Node.js", icon: "node" },
  { name: "TypeScript", icon: "ts" },
  { name: "PostgreSQL", icon: "db" },
  { name: "AWS", icon: "aws" },
];

export const highlights = [
  {
    title: "E-commerce expertise",
    description: "Tiendas, backoffices, catalogos, pagos, stock y flujos de operacion reales.",
    icon: "cart",
  },
  {
    title: "Performance & SEO",
    description: "Interfaces rapidas, arquitectura cuidada, buenas practicas y foco en conversion.",
    icon: "growth",
  },
  {
    title: "APIs & integrations",
    description: "REST APIs, servicios externos, autenticacion, bases de datos y paneles internos.",
    icon: "code",
  },
  {
    title: "Product ownership",
    description: "Del problema al release: criterio tecnico, UX, metricas, mantenimiento y mejora.",
    icon: "users",
  },
];

export const stats = [
  { value: "4+", label: "Years of experience", icon: "code" },
  { value: "20+", label: "Projects delivered", icon: "box" },
  { value: "10+", label: "Clients and teams", icon: "users" },
  { value: "100%", label: "Focus on quality", icon: "quality" },
];

export const experience = [
  {
    period: "Nov 2023 - Mar 2025",
    company: "Tria",
    role: "Full Stack Developer",
    description:
      "Desarrollo freelance de landings, APIs, paneles administrativos, integraciones con Meta API, componentes configurables y despliegues en AWS.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    period: "Jun 2024 - Present",
    company: "EnTres",
    role: "Founder & Product Developer",
    description:
      "Producto propio de delivery para comercios y servicios locales, con app web, mobile, panel administrativo, base de datos, autenticacion, gestion comercial y backend.",
    tags: ["React Native", "Next.js", "Firebase", "Node.js"],
  },
  {
    period: "2022 - Present",
    company: "Vaypol",
    role: "Full Stack Developer",
    description:
      "Desarrollo y mantenimiento de e-commerce con 20k+ usuarios diarios, apps internas, APIs, SEO, performance, observabilidad, analytics, automatizaciones e integraciones con IA.",
    tags: ["React", "Next.js", "React Native", "Sentry", "Sass"],
  },
  {
    period: "2023 - 2025",
    company: "Henry",
    role: "Mentor & Code Reviewer",
    description:
      "Revision tecnica de proyectos, feedback en vivo y acompanamiento a estudiantes en etapas avanzadas del bootcamp.",
    tags: ["Mentoria", "Code review", "JavaScript", "React"],
  },
];

export const projects = [
  {
    title: "EnTres",
    category: "E-commerce",
    type: "Featured",
    url: "https://entres.com.ar/",
    description:
      "Desarrollo propio full stack de un ecosistema de delivery compuesto por web, app mobile, API y backoffice, con gestión de comercios, productos, pedidos, campañas, cupones, puntos de recompensa, estadísticas, Maps y sistema logístico.",
    stack: ["Next.js", "React Native", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    metrics: ["Operacion end-to-end", "Backoffice propio", "Arquitectura escalable"],
    featured: true,
    icon: "cart",
  },
  {
    title: "Broda",
    category: "Web App",
    type: "Comparator",
    description:
      "Desarrollo full stack de una plataforma privada de comparación de precios, con dashboard, API, base de datos, scraping, matching de productos y procesamiento avanzado de PDFs con OCR, Adobe PDF Services, Poppler/pdf-parse y Gemini.",
    stack: ["Next.js", "TypeScript", "Node.js", "React Select"],
    metrics: ["Busqueda avanzada", "UX de alto volumen", "API dedicada"],
    icon: "growth",
  },
  {
    title: "ACT",
    category: "Dashboard",
    type: "CMS",
    description:
      "Desarrollo propio full stack de una plataforma para entrenadores, con sitio web, paneles por rol, API, base de datos, autenticación con Google, gestión de alumnos, rutinas, pagos, progreso físico e IA.",
    stack: ["Next.js", "React 19", "Prisma", "PostgreSQL", "TipTap"],
    metrics: ["Auth", "CMS", "Base de datos"],
    icon: "layers",
  },
  {
    title: "Agronuts",
    category: "Sitio + API",
    type: "Freelance",
    url: "https://agronuts-frontend.vercel.app/",
    description:
      "Desarrollo full stack de catálogo comercial con web pública, panel administrativo, base de datos, gestión de productos, imágenes, contenido enriquecido, carrito local y formularios de contacto.",
    stack: ["Next.js", "Sass", "Node.js", "PostgreSQL", "Vercel Blob"],
    metrics: ["SEO", "Contenido dinamico", "Deploy Vercel"],
    icon: "globe",
  },
  {
    title: "Servitur / Vinitur",
    category: "Turismo",
    type: "Sistema",
    url: "https://www.servitur.tur.ar/",
    description:
      "Desarrollo full stack de sitios turísticos conectados a API y backoffice compartido para gestionar viajes, banners, contenido visual, consultas, formularios y reservas o consultas por WhatsApp.",
    stack: ["Next.js", "Sass", "Node.js", "PostgreSQL", "Cloudinary"],
    metrics: ["Backoffice", "API compartida", "CMS operativo"],
    icon: "pin",
  },
  {
    title: "Exppel",
    category: "Institucional",
    type: "Freelance",
    url: "https://www.exppel.com/",
    description:
      "Desarrollo de sitio institucional para servicios médicos con frontend en Preact, backend Express, formularios de contacto/CV e integración con contenido externo de Instagram.",
    stack: ["React", "Sass", "Node.js", "PostgreSQL"],
    metrics: ["Responsive", "Performance", "Contenido administrable"],
    icon: "screen",
  },
  {
    title: "Transportes OLV",
    category: "Institucional",
    type: "Freelance",
    url: "https://transportes-olv.vercel.app/",
    description:
      "Desarrollo de landing institucional con frontend en Preact y backend de contacto para presentar servicios logísticos, recibir solicitudes de cotización y gestionar adjuntos por email.",
    stack: ["React", "TypeScript", "Sass", "Node.js"],
    metrics: ["Landing", "API", "Responsive"],
    icon: "briefcase",
  },
  {
    title: "Nogal de Cuyo",
    category: "Servicios",
    type: "Freelance",
    url: "https://nogal-de-cuyo-frontend.vercel.app/",
    description:
      "Desarrollo de sitio web institucional para transporte y turismo, con páginas de unidades, galerías, secciones de servicios, formulario de contacto y llamadas a cotización por WhatsApp.",
    stack: ["Next.js", "Sass", "Vercel"],
    metrics: ["SEO", "Mobile first", "Performance"],
    icon: "globe",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: "screen",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "next" },
      { name: "TypeScript", icon: "ts" },
      { name: "JavaScript", icon: "js" },
      { name: "Sass / CSS", icon: "sass" },
    ],
  },
  {
    title: "Backend",
    icon: "db",
    skills: [
      { name: "Node.js", icon: "node" },
      { name: "Express", icon: "ex" },
      { name: "PostgreSQL", icon: "db" },
      { name: "Prisma", icon: "prisma" },
      { name: "REST APIs", icon: "code" },
    ],
  },
  {
    title: "Mobile",
    icon: "phone",
    skills: [
      { name: "React Native", icon: "react" },
      { name: "Expo", icon: "phone" },
      { name: "Firebase", icon: "fire" },
      { name: "Push notifications", icon: "bell" },
    ],
  },
  {
    title: "Cloud / DevOps",
    icon: "cloud",
    skills: [
      { name: "AWS", icon: "aws" },
      { name: "Vercel", icon: "cloud" },
      { name: "CI/CD", icon: "tool" },
      { name: "Monitoring", icon: "growth" },
    ],
  },
];

export const contactCards = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: "mail" },
  { label: "LinkedIn", value: "linkedin.com/in/marcelogottardini", href: profile.linkedin, icon: "in" },
  { label: "GitHub", value: "github.com/Galaximar", href: profile.github, icon: "gh" },
  { label: "Location", value: profile.location, href: "#contacto", icon: "pin" },
];
