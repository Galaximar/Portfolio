import { IconName } from '../components/atoms/AppIcon';

export type CaseStudyInfoItem = {
  labelKey: string;
  value: string;
  icon: IconName;
};

export type CaseStudyFeature = {
  title: string;
  description: string;
  icon: IconName;
};

export type CaseStudyStackGroup = {
  title: string;
  items: string[];
};

export type CaseStudyProcessStep = {
  title: string;
  description: string;
};

export type ProjectCaseStudy = {
  id: string;
  titleKey: string;
  subtitleKey: string;
  descriptionKey: string;
  image?: string;
  projectUrl?: string;
  githubUrl?: string;
  tags: string[];
  info: CaseStudyInfoItem[];
  modules: CaseStudyFeature[];
  challenge: {
    description: string;
    items: string[];
  };
  solution: {
    description: string;
    items: string[];
  };
  features: CaseStudyFeature[];
  stack: CaseStudyStackGroup[];
  architecture: {
    center: string;
    inputs: string[];
    outputs: string[];
  };
  process: CaseStudyProcessStep[];
  previews: string[];
};

const commonProcess = [
  {
    title: 'common_process_discovery_title',
    description: 'common_process_discovery_desc',
  },
  {
    title: 'common_process_design_title',
    description: 'common_process_design_desc',
  },
  {
    title: 'common_process_development_title',
    description: 'common_process_development_desc',
  },
  {
    title: 'common_process_testing_title',
    description: 'common_process_testing_desc',
  },
  {
    title: 'common_process_deployment_title',
    description: 'common_process_deployment_desc',
  },
];

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    id: 'entres',
    titleKey: 'project_entres_title',
    subtitleKey: 'project_entres_subtitle',
    descriptionKey: 'project_entres_desc',
    image: '/images/entres.png',
    projectUrl: 'https://entres.com.ar',
    githubUrl: 'https://github.com/Galaximar',
    tags: ['entres_tag_storefront', 'entres_tag_backoffice', 'entres_tag_mobile', 'entres_tag_api'],
    info: [
      { labelKey: 'client_label', value: 'EnTres', icon: 'briefcase' },
      { labelKey: 'role_label', value: 'entres_role_owner', icon: 'users' },
      { labelKey: 'duration_label', value: 'entres_duration', icon: 'sun' },
    ],
    modules: [
      { title: 'module_storefront_title', description: 'module_storefront_desc', icon: 'globe' },
      { title: 'module_admin_title', description: 'module_admin_desc', icon: 'briefcase' },
      { title: 'module_mobile_title', description: 'module_mobile_desc', icon: 'phone' },
      { title: 'module_api_title', description: 'module_api_desc', icon: 'cloud' },
    ],
    challenge: {
      description: 'entres_challenge_desc',
      items: ['entres_challenge_item_1', 'entres_challenge_item_2', 'entres_challenge_item_3', 'entres_challenge_item_4'],
    },
    solution: {
      description: 'entres_solution_desc',
      items: ['entres_solution_item_1', 'entres_solution_item_2', 'entres_solution_item_3', 'entres_solution_item_4', 'entres_solution_item_5'],
    },
    features: [
      { title: 'entres_feature_merchant_title', description: 'entres_feature_merchant_desc', icon: 'briefcase' },
      { title: 'entres_feature_catalog_title', description: 'entres_feature_catalog_desc', icon: 'cart' },
      { title: 'entres_feature_orders_title', description: 'entres_feature_orders_desc', icon: 'layers' },
      { title: 'entres_feature_delivery_title', description: 'entres_feature_delivery_desc', icon: 'map-pin' },
      { title: 'entres_feature_growth_title', description: 'entres_feature_growth_desc', icon: 'sun' },
      { title: 'entres_feature_ops_title', description: 'entres_feature_ops_desc', icon: 'cloud' },
    ],
    stack: [
      { title: 'Frontend', items: ['Next.js 14', 'React 18', 'Redux Toolkit', 'SASS'] },
      { title: 'Mobile', items: ['React Native 0.77', 'React Navigation', 'Firebase', 'Maps'] },
      { title: 'Backend', items: ['Node.js', 'Express', 'TypeScript', 'Sequelize', 'PostgreSQL'] },
      { title: 'Integrations', items: ['Google OAuth', 'Firebase Admin', 'Cloudinary', 'Telegram', 'XLSX'] },
    ],
    architecture: {
      center: 'entres_arch_center',
      inputs: ['entres_arch_input_1', 'entres_arch_input_2', 'entres_arch_input_3'],
      outputs: ['entres_arch_output_1', 'entres_arch_output_2', 'entres_arch_output_3', 'entres_arch_output_4'],
    },
    process: [
      { title: 'entres_process_1_title', description: 'entres_process_1_desc' },
      { title: 'entres_process_2_title', description: 'entres_process_2_desc' },
      { title: 'entres_process_3_title', description: 'entres_process_3_desc' },
      { title: 'entres_process_4_title', description: 'entres_process_4_desc' },
      { title: 'entres_process_5_title', description: 'entres_process_5_desc' },
    ],
    previews: ['/images/entres.png'],
  },
  {
    id: 'servitur',
    titleKey: 'project_servitur_title',
    subtitleKey: 'project_tag_ecommerce',
    descriptionKey: 'project_servitur_desc',
    image: '/images/servitur.png',
    projectUrl: 'https://servitur.tur.ar/',
    tags: ['servitur_tag_tourism', 'servitur_tag_backoffice', 'servitur_tag_leads'],
    info: [
      { labelKey: 'client_label', value: 'Servitur', icon: 'briefcase' },
      { labelKey: 'role_label', value: 'role_full_stack_developer', icon: 'users' },
      { labelKey: 'duration_label', value: 'freelance_duration', icon: 'sun' },
    ],
    modules: [
      { title: 'module_public_web_title', description: 'module_public_web_desc', icon: 'globe' },
      { title: 'module_admin_title', description: 'module_admin_desc', icon: 'briefcase' },
      { title: 'module_api_title', description: 'module_api_desc', icon: 'cloud' },
    ],
    challenge: {
      description: 'servitur_challenge_desc',
      items: ['servitur_challenge_item_1', 'servitur_challenge_item_2', 'servitur_challenge_item_3', 'servitur_challenge_item_4'],
    },
    solution: {
      description: 'servitur_solution_desc',
      items: ['servitur_solution_item_1', 'servitur_solution_item_2', 'servitur_solution_item_3', 'servitur_solution_item_4'],
    },
    features: [
      { title: 'servitur_feature_trips_title', description: 'servitur_feature_trips_desc', icon: 'map-pin' },
      { title: 'servitur_feature_banners_title', description: 'servitur_feature_banners_desc', icon: 'layers' },
      { title: 'servitur_feature_email_title', description: 'servitur_feature_email_desc', icon: 'mail' },
      { title: 'servitur_feature_tourism_title', description: 'servitur_feature_tourism_desc', icon: 'globe' },
    ],
    stack: [
      { title: 'Frontend', items: ['Next.js', 'SASS'] },
      { title: 'Backend', items: ['Sequelize', 'PostgreSQL', 'Nodemailer'] },
      { title: 'Media', items: ['Cloudinary'] },
    ],
    architecture: {
      center: 'servitur_arch_center',
      inputs: ['servitur_arch_input_1', 'servitur_arch_input_2'],
      outputs: ['PostgreSQL', 'Cloudinary', 'Email'],
    },
    process: commonProcess,
    previews: ['/images/servitur.png'],
  },
  {
    id: 'broda',
    titleKey: 'project_broda_title',
    subtitleKey: 'project_tag_automation',
    descriptionKey: 'project_broda_desc',
    image: '/images/broda.png',
    tags: ['broda_tag_benchmark', 'broda_tag_scraping', 'broda_tag_ocr', 'broda_tag_dashboard'],
    info: [
      { labelKey: 'client_label', value: 'Broda', icon: 'briefcase' },
      { labelKey: 'role_label', value: 'role_full_stack_developer', icon: 'users' },
      { labelKey: 'duration_label', value: 'broda_duration', icon: 'sun' },
    ],
    modules: [
      { title: 'module_dashboard_title', description: 'module_dashboard_desc', icon: 'layers' },
      { title: 'module_api_title', description: 'module_api_desc', icon: 'cloud' },
      { title: 'module_automation_title', description: 'module_automation_desc', icon: 'code' },
      { title: 'module_reports_title', description: 'module_reports_desc', icon: 'download' },
    ],
    challenge: {
      description: 'broda_challenge_desc',
      items: ['broda_challenge_item_1', 'broda_challenge_item_2', 'broda_challenge_item_3', 'broda_challenge_item_4'],
    },
    solution: {
      description: 'broda_solution_desc',
      items: ['broda_solution_item_1', 'broda_solution_item_2', 'broda_solution_item_3', 'broda_solution_item_4', 'broda_solution_item_5'],
    },
    features: [
      { title: 'broda_feature_comparison_title', description: 'broda_feature_comparison_desc', icon: 'layers' },
      { title: 'broda_feature_sku_title', description: 'broda_feature_sku_desc', icon: 'code' },
      { title: 'broda_feature_scraping_title', description: 'broda_feature_scraping_desc', icon: 'cloud' },
      { title: 'broda_feature_pdf_title', description: 'broda_feature_pdf_desc', icon: 'info' },
      { title: 'broda_feature_export_title', description: 'broda_feature_export_desc', icon: 'briefcase' },
      { title: 'broda_feature_catalog_title', description: 'broda_feature_catalog_desc', icon: 'cart' },
    ],
    stack: [
      { title: 'Frontend', items: ['Next.js 14', 'React 18', 'TypeScript', 'SASS', 'React Select', 'React Window'] },
      { title: 'Backend', items: ['Node.js', 'Express', 'TypeScript', 'Sequelize', 'PostgreSQL'] },
      { title: 'Automation', items: ['Puppeteer', 'node-cron', 'Axios', 'Vtex GraphQL', 'PedidosYa APIs'] },
      { title: 'Extraction & Reports', items: ['Tesseract.js', 'Adobe PDF Services', 'pdf-parse', 'Poppler', 'Gemini API', 'ExcelJS'] },
    ],
    architecture: {
      center: 'broda_arch_center',
      inputs: ['broda_arch_input_1', 'broda_arch_input_2', 'broda_arch_input_3'],
      outputs: ['broda_arch_output_1', 'broda_arch_output_2', 'broda_arch_output_3'],
    },
    process: [
      { title: 'broda_process_1_title', description: 'broda_process_1_desc' },
      { title: 'broda_process_2_title', description: 'broda_process_2_desc' },
      { title: 'broda_process_3_title', description: 'broda_process_3_desc' },
      { title: 'broda_process_4_title', description: 'broda_process_4_desc' },
      { title: 'broda_process_5_title', description: 'broda_process_5_desc' },
    ],
    previews: ['/images/broda.png'],
  },
  {
    id: 'act',
    titleKey: 'project_act_title',
    subtitleKey: 'project_tag_dashboard',
    descriptionKey: 'project_act_desc',
    image: '/images/act.png',
    tags: ['act_tag_roles', 'act_tag_routines', 'act_tag_tracking', 'act_tag_ai'],
    info: [
      { labelKey: 'client_label', value: 'ACT', icon: 'briefcase' },
      { labelKey: 'role_label', value: 'role_full_stack_developer', icon: 'users' },
      { labelKey: 'duration_label', value: 'act_duration', icon: 'sun' },
    ],
    modules: [
      { title: 'module_dashboard_title', description: 'module_dashboard_desc', icon: 'layers' },
      { title: 'module_auth_title', description: 'module_auth_desc', icon: 'lock' },
      { title: 'module_editor_title', description: 'module_editor_desc', icon: 'info' },
      { title: 'module_ai_title', description: 'module_ai_desc', icon: 'sun' },
    ],
    challenge: {
      description: 'act_challenge_desc',
      items: ['act_challenge_item_1', 'act_challenge_item_2', 'act_challenge_item_3', 'act_challenge_item_4'],
    },
    solution: {
      description: 'act_solution_desc',
      items: ['act_solution_item_1', 'act_solution_item_2', 'act_solution_item_3', 'act_solution_item_4', 'act_solution_item_5'],
    },
    features: [
      { title: 'act_feature_roles_title', description: 'act_feature_roles_desc', icon: 'users' },
      { title: 'act_feature_routine_title', description: 'act_feature_routine_desc', icon: 'layers' },
      { title: 'act_feature_ai_title', description: 'act_feature_ai_desc', icon: 'sun' },
      { title: 'act_feature_tracking_title', description: 'act_feature_tracking_desc', icon: 'info' },
      { title: 'act_feature_plans_title', description: 'act_feature_plans_desc', icon: 'briefcase' },
      { title: 'act_feature_security_title', description: 'act_feature_security_desc', icon: 'lock' },
    ],
    stack: [
      { title: 'Frontend', items: ['Next.js 16', 'React 19', 'Tailwind CSS 4', 'Tiptap', 'Recharts', 'Lucide React'] },
      { title: 'Backend & Data', items: ['Next.js API Routes', 'Prisma 7', 'PostgreSQL', 'NextAuth', 'bcryptjs'] },
      { title: 'Validation & Security', items: ['Zod', 'sanitize-html', 'Cloudflare Turnstile', 'Security Headers', 'Rate Limits'] },
      { title: 'AI & Product', items: ['OpenAI Responses API', 'Structured JSON output', 'Vercel Analytics'] },
    ],
    architecture: {
      center: 'act_arch_center',
      inputs: ['act_arch_input_1', 'act_arch_input_2', 'act_arch_input_3'],
      outputs: ['act_arch_output_1', 'act_arch_output_2', 'act_arch_output_3', 'act_arch_output_4'],
    },
    process: [
      { title: 'act_process_1_title', description: 'act_process_1_desc' },
      { title: 'act_process_2_title', description: 'act_process_2_desc' },
      { title: 'act_process_3_title', description: 'act_process_3_desc' },
      { title: 'act_process_4_title', description: 'act_process_4_desc' },
      { title: 'act_process_5_title', description: 'act_process_5_desc' },
    ],
    previews: ['/images/act.png'],
  },
  {
    id: 'checker',
    titleKey: 'project_checker_title',
    subtitleKey: 'project_tag_fintech',
    descriptionKey: 'project_checker_desc',
    image: '/images/cauciones-checker.png',
    projectUrl: 'https://cauciones-checker.onrender.com/',
    tags: ['checker_tag_monitoring', 'checker_tag_scraping', 'checker_tag_alerts', 'checker_tag_history'],
    info: [
      { labelKey: 'client_label', value: 'checker_client', icon: 'briefcase' },
      { labelKey: 'role_label', value: 'role_full_stack_developer', icon: 'users' },
      { labelKey: 'duration_label', value: 'checker_duration', icon: 'sun' },
    ],
    modules: [
      { title: 'module_dashboard_title', description: 'module_dashboard_desc', icon: 'layers' },
      { title: 'module_scraper_title', description: 'module_scraper_desc', icon: 'code' },
      { title: 'module_alerts_title', description: 'module_alerts_desc', icon: 'send' },
      { title: 'module_storage_title', description: 'module_storage_desc', icon: 'cloud' },
    ],
    challenge: {
      description: 'checker_challenge_desc',
      items: ['checker_challenge_item_1', 'checker_challenge_item_2', 'checker_challenge_item_3', 'checker_challenge_item_4'],
    },
    solution: {
      description: 'checker_solution_desc',
      items: ['checker_solution_item_1', 'checker_solution_item_2', 'checker_solution_item_3', 'checker_solution_item_4', 'checker_solution_item_5'],
    },
    features: [
      { title: 'checker_feature_scraping_title', description: 'checker_feature_scraping_desc', icon: 'cloud' },
      { title: 'checker_feature_alerts_title', description: 'checker_feature_alerts_desc', icon: 'send' },
      { title: 'checker_feature_history_title', description: 'checker_feature_history_desc', icon: 'layers' },
      { title: 'checker_feature_chart_title', description: 'checker_feature_chart_desc', icon: 'info' },
      { title: 'checker_feature_market_title', description: 'checker_feature_market_desc', icon: 'sun' },
      { title: 'checker_feature_config_title', description: 'checker_feature_config_desc', icon: 'code' },
    ],
    stack: [
      { title: 'Backend', items: ['Node.js', 'Express 5', 'Axios', 'Cheerio', 'CORS'] },
      { title: 'Data', items: ['better-sqlite3', 'SQLite', 'Daily max TNA records'] },
      { title: 'Frontend', items: ['HTML', 'CSS', 'Vanilla JavaScript', 'Chart.js'] },
      { title: 'Automation', items: ['Telegram Bot API', 'setInterval worker', 'dotenv', 'Render'] },
    ],
    architecture: {
      center: 'checker_arch_center',
      inputs: ['checker_arch_input_1', 'checker_arch_input_2', 'checker_arch_input_3'],
      outputs: ['checker_arch_output_1', 'checker_arch_output_2', 'checker_arch_output_3', 'checker_arch_output_4'],
    },
    process: [
      { title: 'checker_process_1_title', description: 'checker_process_1_desc' },
      { title: 'checker_process_2_title', description: 'checker_process_2_desc' },
      { title: 'checker_process_3_title', description: 'checker_process_3_desc' },
      { title: 'checker_process_4_title', description: 'checker_process_4_desc' },
      { title: 'checker_process_5_title', description: 'checker_process_5_desc' },
    ],
    previews: ['/images/cauciones-checker.png'],
  },
  {
    id: 'iptvar',
    titleKey: 'project_iptvar_title',
    subtitleKey: 'project_tag_tv',
    descriptionKey: 'project_iptvar_desc',
    image: '/images/iptvar.png',
    githubUrl: 'https://github.com/Galaximar/IPTV_AR',
    tags: ['iptvar_tag_android_tv', 'iptvar_tag_m3u', 'iptvar_tag_player', 'iptvar_tag_focus'],
    info: [
      { labelKey: 'client_label', value: 'iptvar_client', icon: 'briefcase' },
      { labelKey: 'role_label', value: 'role_full_stack_developer', icon: 'users' },
      { labelKey: 'duration_label', value: 'iptvar_duration', icon: 'sun' },
    ],
    modules: [
      { title: 'module_tv_app_title', description: 'module_tv_app_desc', icon: 'layers' },
      { title: 'module_player_title', description: 'module_player_desc', icon: 'layers' },
      { title: 'module_local_data_title', description: 'module_local_data_desc', icon: 'box' },
    ],
    challenge: {
      description: 'iptvar_challenge_desc',
      items: ['iptvar_challenge_item_1', 'iptvar_challenge_item_2', 'iptvar_challenge_item_3', 'iptvar_challenge_item_4'],
    },
    solution: {
      description: 'iptvar_solution_desc',
      items: ['iptvar_solution_item_1', 'iptvar_solution_item_2', 'iptvar_solution_item_3', 'iptvar_solution_item_4', 'iptvar_solution_item_5'],
    },
    features: [
      { title: 'iptvar_feature_m3u_title', description: 'iptvar_feature_m3u_desc', icon: 'code' },
      { title: 'iptvar_feature_tv_title', description: 'iptvar_feature_tv_desc', icon: 'globe' },
      { title: 'iptvar_feature_player_title', description: 'iptvar_feature_player_desc', icon: 'layers' },
      { title: 'iptvar_feature_favorites_title', description: 'iptvar_feature_favorites_desc', icon: 'box' },
      { title: 'iptvar_feature_manual_title', description: 'iptvar_feature_manual_desc', icon: 'info' },
      { title: 'iptvar_feature_search_title', description: 'iptvar_feature_search_desc', icon: 'chevron-right' },
    ],
    stack: [
      { title: 'Mobile / TV', items: ['Expo 54', 'React Native 0.81', 'React 19', 'TypeScript'] },
      { title: 'Playback', items: ['expo-video', 'expo-av', 'react-native-youtube-iframe', 'react-native-webview'] },
      { title: 'TV Experience', items: ['Android TV Leanback', 'TV focus navigation', 'Screen Orientation', 'Navigation Bar'] },
      { title: 'Data & UI', items: ['Axios', 'AsyncStorage', 'Expo Image', 'Expo Linear Gradient', 'Lucide React Native'] },
    ],
    architecture: {
      center: 'iptvar_arch_center',
      inputs: ['iptvar_arch_input_1', 'iptvar_arch_input_2', 'iptvar_arch_input_3'],
      outputs: ['iptvar_arch_output_1', 'iptvar_arch_output_2', 'iptvar_arch_output_3', 'iptvar_arch_output_4'],
    },
    process: [
      { title: 'iptvar_process_1_title', description: 'iptvar_process_1_desc' },
      { title: 'iptvar_process_2_title', description: 'iptvar_process_2_desc' },
      { title: 'iptvar_process_3_title', description: 'iptvar_process_3_desc' },
      { title: 'iptvar_process_4_title', description: 'iptvar_process_4_desc' },
      { title: 'iptvar_process_5_title', description: 'iptvar_process_5_desc' },
    ],
    previews: ['/images/iptvar.png'],
  },
  {
    id: 'vinitur',
    titleKey: 'project_vinitur_title',
    subtitleKey: 'project_tag_landing',
    descriptionKey: 'project_vinitur_desc',
    image: '/images/vinitur.png',
    projectUrl: 'https://vinitur-frontend.vercel.app/',
    tags: ['vinitur_tag_tourism', 'vinitur_tag_multilang', 'vinitur_tag_backoffice', 'vinitur_tag_leads'],
    info: [
      { labelKey: 'client_label', value: 'Vinitur', icon: 'briefcase' },
      { labelKey: 'role_label', value: 'role_full_stack_developer', icon: 'users' },
      { labelKey: 'duration_label', value: 'vinitur_duration', icon: 'sun' },
    ],
    modules: [
      { title: 'module_public_web_title', description: 'module_public_web_desc', icon: 'globe' },
      { title: 'module_shared_backoffice_title', description: 'module_shared_backoffice_desc', icon: 'briefcase' },
      { title: 'module_api_title', description: 'module_api_desc', icon: 'cloud' },
      { title: 'module_leads_title', description: 'module_leads_desc', icon: 'mail' },
    ],
    challenge: {
      description: 'vinitur_challenge_desc',
      items: ['vinitur_challenge_item_1', 'vinitur_challenge_item_2', 'vinitur_challenge_item_3', 'vinitur_challenge_item_4'],
    },
    solution: {
      description: 'vinitur_solution_desc',
      items: ['vinitur_solution_item_1', 'vinitur_solution_item_2', 'vinitur_solution_item_3', 'vinitur_solution_item_4', 'vinitur_solution_item_5'],
    },
    features: [
      { title: 'vinitur_feature_multilang_title', description: 'vinitur_feature_multilang_desc', icon: 'globe' },
      { title: 'vinitur_feature_products_title', description: 'vinitur_feature_products_desc', icon: 'map-pin' },
      { title: 'vinitur_feature_content_title', description: 'vinitur_feature_content_desc', icon: 'layers' },
      { title: 'vinitur_feature_detail_title', description: 'vinitur_feature_detail_desc', icon: 'info' },
      { title: 'vinitur_feature_leads_title', description: 'vinitur_feature_leads_desc', icon: 'mail' },
      { title: 'vinitur_feature_proxy_title', description: 'vinitur_feature_proxy_desc', icon: 'cloud' },
    ],
    stack: [
      { title: 'Frontend', items: ['Next.js 14', 'React 18', 'SASS Modules', 'React Icons', 'React Toastify'] },
      { title: 'Content & i18n', items: ['i18next', 'Spanish', 'English', 'Portuguese', 'Dynamic copy'] },
      { title: 'API & Data', items: ['Axios', 'Express proxy API', 'Backoffice API', 'Product filters'] },
      { title: 'Lead Flow', items: ['Nodemailer', 'WhatsApp links', 'Contact form', 'Input validation'] },
    ],
    architecture: {
      center: 'vinitur_arch_center',
      inputs: ['vinitur_arch_input_1', 'vinitur_arch_input_2', 'vinitur_arch_input_3'],
      outputs: ['vinitur_arch_output_1', 'vinitur_arch_output_2', 'vinitur_arch_output_3', 'vinitur_arch_output_4'],
    },
    process: [
      { title: 'vinitur_process_1_title', description: 'vinitur_process_1_desc' },
      { title: 'vinitur_process_2_title', description: 'vinitur_process_2_desc' },
      { title: 'vinitur_process_3_title', description: 'vinitur_process_3_desc' },
      { title: 'vinitur_process_4_title', description: 'vinitur_process_4_desc' },
      { title: 'vinitur_process_5_title', description: 'vinitur_process_5_desc' },
    ],
    previews: ['/images/vinitur.png'],
  },
  {
    id: 'agronuts',
    titleKey: 'project_agronuts_title',
    subtitleKey: 'project_tag_ecommerce',
    descriptionKey: 'project_agronuts_desc',
    image: '/images/agronuts.png',
    tags: ['agronuts_tag_catalog', 'agronuts_tag_backoffice', 'agronuts_tag_cart', 'agronuts_tag_media'],
    info: [
      { labelKey: 'client_label', value: 'Agronuts', icon: 'briefcase' },
      { labelKey: 'role_label', value: 'role_full_stack_developer', icon: 'users' },
      { labelKey: 'duration_label', value: 'freelance_duration', icon: 'sun' },
    ],
    modules: [
      { title: 'module_public_web_title', description: 'module_public_web_desc', icon: 'globe' },
      { title: 'module_admin_title', description: 'module_admin_desc', icon: 'briefcase' },
      { title: 'module_catalog_title', description: 'module_catalog_desc', icon: 'cart' },
      { title: 'module_media_title', description: 'module_media_desc', icon: 'cloud' },
    ],
    challenge: {
      description: 'agronuts_challenge_desc',
      items: ['agronuts_challenge_item_1', 'agronuts_challenge_item_2', 'agronuts_challenge_item_3', 'agronuts_challenge_item_4'],
    },
    solution: {
      description: 'agronuts_solution_desc',
      items: ['agronuts_solution_item_1', 'agronuts_solution_item_2', 'agronuts_solution_item_3', 'agronuts_solution_item_4'],
    },
    features: [
      { title: 'agronuts_feature_catalog_title', description: 'agronuts_feature_catalog_desc', icon: 'cart' },
      { title: 'agronuts_feature_backoffice_title', description: 'agronuts_feature_backoffice_desc', icon: 'briefcase' },
      { title: 'agronuts_feature_media_title', description: 'agronuts_feature_media_desc', icon: 'cloud' },
      { title: 'agronuts_feature_cart_title', description: 'agronuts_feature_cart_desc', icon: 'layers' },
      { title: 'agronuts_feature_rich_title', description: 'agronuts_feature_rich_desc', icon: 'info' },
      { title: 'agronuts_feature_contact_title', description: 'agronuts_feature_contact_desc', icon: 'mail' },
    ],
    stack: [
      { title: 'Frontend', items: ['Next.js 14', 'React 18', 'SASS Modules', 'React Icons'] },
      { title: 'Backoffice', items: ['Next.js API Routes', 'Sequelize', 'PostgreSQL', 'React Quill'] },
      { title: 'Media & Storage', items: ['Firebase Storage', 'UUID'] },
      { title: 'Lead Flow', items: ['Nodemailer', 'React Toastify', 'Input Mask', 'LocalStorage cart'] },
    ],
    architecture: {
      center: 'agronuts_arch_center',
      inputs: ['agronuts_arch_input_1', 'agronuts_arch_input_2', 'agronuts_arch_input_3'],
      outputs: ['agronuts_arch_output_1', 'agronuts_arch_output_2', 'agronuts_arch_output_3'],
    },
    process: [
      { title: 'agronuts_process_1_title', description: 'agronuts_process_1_desc' },
      { title: 'agronuts_process_2_title', description: 'agronuts_process_2_desc' },
      { title: 'agronuts_process_3_title', description: 'agronuts_process_3_desc' },
      { title: 'agronuts_process_4_title', description: 'agronuts_process_4_desc' },
      { title: 'agronuts_process_5_title', description: 'agronuts_process_5_desc' },
    ],
    previews: ['/images/agronuts.png'],
  },
  {
    id: 'transportes',
    titleKey: 'project_transportes_title',
    subtitleKey: 'project_tag_logistics',
    descriptionKey: 'project_transportes_desc',
    image: '/images/transportes-olv.png',
    tags: ['transportes_tag_landing', 'transportes_tag_logistics', 'transportes_tag_quotes', 'transportes_tag_email'],
    info: [
      { labelKey: 'client_label', value: 'Transportes OLV', icon: 'briefcase' },
      { labelKey: 'role_label', value: 'role_full_stack_developer', icon: 'users' },
      { labelKey: 'duration_label', value: 'freelance_duration', icon: 'sun' },
    ],
    modules: [
      { title: 'module_landing_title', description: 'module_landing_desc', icon: 'globe' },
      { title: 'module_contact_backend_title', description: 'module_contact_backend_desc', icon: 'mail' },
      { title: 'module_leads_title', description: 'module_leads_desc', icon: 'briefcase' },
    ],
    challenge: {
      description: 'transportes_challenge_desc',
      items: ['transportes_challenge_item_1', 'transportes_challenge_item_2', 'transportes_challenge_item_3', 'transportes_challenge_item_4'],
    },
    solution: {
      description: 'transportes_solution_desc',
      items: ['transportes_solution_item_1', 'transportes_solution_item_2', 'transportes_solution_item_3', 'transportes_solution_item_4'],
    },
    features: [
      { title: 'transportes_feature_services_title', description: 'transportes_feature_services_desc', icon: 'layers' },
      { title: 'transportes_feature_form_title', description: 'transportes_feature_form_desc', icon: 'mail' },
      { title: 'transportes_feature_attachment_title', description: 'transportes_feature_attachment_desc', icon: 'download' },
      { title: 'transportes_feature_whatsapp_title', description: 'transportes_feature_whatsapp_desc', icon: 'phone' },
      { title: 'transportes_feature_performance_title', description: 'transportes_feature_performance_desc', icon: 'sun' },
      { title: 'transportes_feature_validation_title', description: 'transportes_feature_validation_desc', icon: 'lock' },
    ],
    stack: [
      { title: 'Frontend', items: ['Preact', 'Vite', 'SASS Modules', 'React Router DOM', 'React Icons'] },
      { title: 'Backend', items: ['Express', 'Nodemailer', 'Multer', 'CORS'] },
      { title: 'Forms', items: ['Custom form hook', 'Input Mask', 'Validators', 'React Toastify'] },
    ],
    architecture: {
      center: 'transportes_arch_center',
      inputs: ['transportes_arch_input_1', 'transportes_arch_input_2', 'transportes_arch_input_3'],
      outputs: ['transportes_arch_output_1', 'transportes_arch_output_2', 'transportes_arch_output_3'],
    },
    process: [
      { title: 'transportes_process_1_title', description: 'transportes_process_1_desc' },
      { title: 'transportes_process_2_title', description: 'transportes_process_2_desc' },
      { title: 'transportes_process_3_title', description: 'transportes_process_3_desc' },
      { title: 'transportes_process_4_title', description: 'transportes_process_4_desc' },
      { title: 'transportes_process_5_title', description: 'transportes_process_5_desc' },
    ],
    previews: ['/images/transportes-olv.png'],
  },
  {
    id: 'exppel',
    titleKey: 'project_exppel_title',
    subtitleKey: 'project_tag_webapp',
    descriptionKey: 'project_exppel_desc',
    image: '/images/exppel.png',
    tags: ['exppel_tag_medical', 'exppel_tag_instagram', 'exppel_tag_forms', 'exppel_tag_content'],
    info: [
      { labelKey: 'client_label', value: 'Exppel', icon: 'briefcase' },
      { labelKey: 'role_label', value: 'role_full_stack_developer', icon: 'users' },
      { labelKey: 'duration_label', value: 'freelance_duration', icon: 'sun' },
    ],
    modules: [
      { title: 'module_landing_title', description: 'module_landing_desc', icon: 'globe' },
      { title: 'module_contact_backend_title', description: 'module_contact_backend_desc', icon: 'mail' },
      { title: 'module_external_feed_title', description: 'module_external_feed_desc', icon: 'cloud' },
    ],
    challenge: {
      description: 'exppel_challenge_desc',
      items: ['exppel_challenge_item_1', 'exppel_challenge_item_2', 'exppel_challenge_item_3', 'exppel_challenge_item_4'],
    },
    solution: {
      description: 'exppel_solution_desc',
      items: ['exppel_solution_item_1', 'exppel_solution_item_2', 'exppel_solution_item_3', 'exppel_solution_item_4'],
    },
    features: [
      { title: 'exppel_feature_services_title', description: 'exppel_feature_services_desc', icon: 'briefcase' },
      { title: 'exppel_feature_instagram_title', description: 'exppel_feature_instagram_desc', icon: 'cloud' },
      { title: 'exppel_feature_token_title', description: 'exppel_feature_token_desc', icon: 'lock' },
      { title: 'exppel_feature_contact_title', description: 'exppel_feature_contact_desc', icon: 'mail' },
      { title: 'exppel_feature_coverage_title', description: 'exppel_feature_coverage_desc', icon: 'map-pin' },
      { title: 'exppel_feature_precat_title', description: 'exppel_feature_precat_desc', icon: 'sun' },
    ],
    stack: [
      { title: 'Frontend', items: ['Preact', 'Vite', 'SASS Modules', 'React Router DOM'] },
      { title: 'Backend', items: ['Express', 'Nodemailer', 'Multer', 'CORS', 'Axios'] },
      { title: 'Instagram', items: ['Instagram Basic Display API', 'OAuth', 'Vercel Postgres'] },
    ],
    architecture: {
      center: 'exppel_arch_center',
      inputs: ['exppel_arch_input_1', 'exppel_arch_input_2', 'exppel_arch_input_3'],
      outputs: ['exppel_arch_output_1', 'exppel_arch_output_2', 'exppel_arch_output_3', 'exppel_arch_output_4'],
    },
    process: [
      { title: 'exppel_process_1_title', description: 'exppel_process_1_desc' },
      { title: 'exppel_process_2_title', description: 'exppel_process_2_desc' },
      { title: 'exppel_process_3_title', description: 'exppel_process_3_desc' },
      { title: 'exppel_process_4_title', description: 'exppel_process_4_desc' },
      { title: 'exppel_process_5_title', description: 'exppel_process_5_desc' },
    ],
    previews: ['/images/exppel.png'],
  },
  {
    id: 'nogal',
    titleKey: 'project_nogal_title',
    subtitleKey: 'project_tag_landing',
    descriptionKey: 'project_nogal_desc',
    image: '/images/nogal-de-cuyo.png',
    tags: ['nogal_tag_fleet', 'nogal_tag_tourism', 'nogal_tag_whatsapp', 'nogal_tag_seo'],
    info: [
      { labelKey: 'client_label', value: 'Nogal de Cuyo', icon: 'briefcase' },
      { labelKey: 'role_label', value: 'role_full_stack_developer', icon: 'users' },
      { labelKey: 'duration_label', value: 'freelance_duration', icon: 'sun' },
    ],
    modules: [
      { title: 'module_public_web_title', description: 'module_public_web_desc', icon: 'globe' },
      { title: 'module_content_routes_title', description: 'module_content_routes_desc', icon: 'layers' },
      { title: 'module_leads_title', description: 'module_leads_desc', icon: 'mail' },
    ],
    challenge: {
      description: 'nogal_challenge_desc',
      items: ['nogal_challenge_item_1', 'nogal_challenge_item_2', 'nogal_challenge_item_3', 'nogal_challenge_item_4'],
    },
    solution: {
      description: 'nogal_solution_desc',
      items: ['nogal_solution_item_1', 'nogal_solution_item_2', 'nogal_solution_item_3', 'nogal_solution_item_4'],
    },
    features: [
      { title: 'nogal_feature_fleet_title', description: 'nogal_feature_fleet_desc', icon: 'layers' },
      { title: 'nogal_feature_units_title', description: 'nogal_feature_units_desc', icon: 'info' },
      { title: 'nogal_feature_services_title', description: 'nogal_feature_services_desc', icon: 'briefcase' },
      { title: 'nogal_feature_media_title', description: 'nogal_feature_media_desc', icon: 'globe' },
      { title: 'nogal_feature_quote_title', description: 'nogal_feature_quote_desc', icon: 'phone' },
      { title: 'nogal_feature_static_title', description: 'nogal_feature_static_desc', icon: 'sun' },
    ],
    stack: [
      { title: 'Frontend', items: ['Next.js 14', 'React 18', 'SASS Modules', 'React Icons'] },
      { title: 'Content', items: ['Static fleet data', 'Dynamic unit routes', 'Banner sliders', 'Video embeds'] },
      { title: 'Conversion', items: ['Axios Email API', 'React Toastify', 'WhatsApp CTA', 'Contact pages', 'Location page'] },
    ],
    architecture: {
      center: 'nogal_arch_center',
      inputs: ['nogal_arch_input_1', 'nogal_arch_input_2', 'nogal_arch_input_3'],
      outputs: ['nogal_arch_output_1', 'nogal_arch_output_2', 'nogal_arch_output_3'],
    },
    process: [
      { title: 'nogal_process_1_title', description: 'nogal_process_1_desc' },
      { title: 'nogal_process_2_title', description: 'nogal_process_2_desc' },
      { title: 'nogal_process_3_title', description: 'nogal_process_3_desc' },
      { title: 'nogal_process_4_title', description: 'nogal_process_4_desc' },
      { title: 'nogal_process_5_title', description: 'nogal_process_5_desc' },
    ],
    previews: ['/images/nogal-de-cuyo.png'],
  },
  {
    id: 'convalor',
    titleKey: 'project_convalor_title',
    subtitleKey: 'project_tag_landing',
    descriptionKey: 'project_convalor_desc',
    image: '/images/convalor.png',
    tags: ['convalor_tag_engineering', 'convalor_tag_projects', 'convalor_tag_services', 'convalor_tag_leads'],
    info: [
      { labelKey: 'client_label', value: 'Convalor', icon: 'briefcase' },
      { labelKey: 'role_label', value: 'role_full_stack_developer', icon: 'users' },
      { labelKey: 'duration_label', value: 'freelance_duration', icon: 'sun' },
    ],
    modules: [
      { title: 'module_public_web_title', description: 'module_public_web_desc', icon: 'globe' },
      { title: 'module_content_routes_title', description: 'module_content_routes_desc', icon: 'layers' },
      { title: 'module_leads_title', description: 'module_leads_desc', icon: 'mail' },
    ],
    challenge: {
      description: 'convalor_challenge_desc',
      items: ['convalor_challenge_item_1', 'convalor_challenge_item_2', 'convalor_challenge_item_3', 'convalor_challenge_item_4'],
    },
    solution: {
      description: 'convalor_solution_desc',
      items: ['convalor_solution_item_1', 'convalor_solution_item_2', 'convalor_solution_item_3', 'convalor_solution_item_4'],
    },
    features: [
      { title: 'convalor_feature_positioning_title', description: 'convalor_feature_positioning_desc', icon: 'globe' },
      { title: 'convalor_feature_projects_title', description: 'convalor_feature_projects_desc', icon: 'layers' },
      { title: 'convalor_feature_detail_title', description: 'convalor_feature_detail_desc', icon: 'info' },
      { title: 'convalor_feature_services_title', description: 'convalor_feature_services_desc', icon: 'briefcase' },
      { title: 'convalor_feature_contact_title', description: 'convalor_feature_contact_desc', icon: 'mail' },
      { title: 'convalor_feature_next_title', description: 'convalor_feature_next_desc', icon: 'react' },
    ],
    stack: [
      { title: 'Frontend', items: ['Next.js 14', 'React 18', 'SASS Modules', 'React Icons'] },
      { title: 'Pages', items: ['Home', 'About', 'Team', 'Contact', 'Project detail'] },
      { title: 'Content', items: ['Project cards', 'Information lists', 'Presentation sections', 'WhatsApp CTA'] },
      { title: 'Lead Flow', items: ['Axios Email API', 'React Toastify', 'Contact forms', 'Input validation'] },
    ],
    architecture: {
      center: 'convalor_arch_center',
      inputs: ['convalor_arch_input_1', 'convalor_arch_input_2', 'convalor_arch_input_3'],
      outputs: ['convalor_arch_output_1', 'convalor_arch_output_2', 'convalor_arch_output_3'],
    },
    process: [
      { title: 'convalor_process_1_title', description: 'convalor_process_1_desc' },
      { title: 'convalor_process_2_title', description: 'convalor_process_2_desc' },
      { title: 'convalor_process_3_title', description: 'convalor_process_3_desc' },
      { title: 'convalor_process_4_title', description: 'convalor_process_4_desc' },
      { title: 'convalor_process_5_title', description: 'convalor_process_5_desc' },
    ],
    previews: ['/images/convalor.png'],
  },
];

const fallbackIds: string[] = [];

const fallbackCaseStudies = fallbackIds.map((id) => ({
  id,
  titleKey: `project_${id}_title`,
  subtitleKey: id === 'iptvar' ? 'project_tag_tv' : 'project_tag_webapp',
  descriptionKey: `project_${id}_desc`,
  tags: ['fallback_tag_fullstack', 'fallback_tag_delivery', 'fallback_tag_responsive'],
  info: [
    { labelKey: 'client_label', value: id.charAt(0).toUpperCase() + id.slice(1), icon: 'briefcase' as IconName },
    { labelKey: 'role_label', value: 'role_full_stack_developer', icon: 'users' as IconName },
    { labelKey: 'duration_label', value: 'fallback_duration', icon: 'sun' as IconName },
  ],
  modules: [
    { title: 'module_public_web_title', description: 'module_public_web_desc', icon: 'globe' as IconName },
    { title: 'module_api_title', description: 'module_api_desc', icon: 'cloud' as IconName },
  ],
  challenge: {
    description: 'fallback_challenge_desc',
    items: ['fallback_challenge_item_1', 'fallback_challenge_item_2', 'fallback_challenge_item_3', 'fallback_challenge_item_4'],
  },
  solution: {
    description: 'fallback_solution_desc',
    items: ['fallback_solution_item_1', 'fallback_solution_item_2', 'fallback_solution_item_3', 'fallback_solution_item_4'],
  },
  features: [
    { title: 'fallback_feature_responsive_title', description: 'fallback_feature_responsive_desc', icon: 'globe' as IconName },
    { title: 'fallback_feature_admin_title', description: 'fallback_feature_admin_desc', icon: 'layers' as IconName },
    { title: 'fallback_feature_integrations_title', description: 'fallback_feature_integrations_desc', icon: 'cloud' as IconName },
    { title: 'fallback_feature_delivery_title', description: 'fallback_feature_delivery_desc', icon: 'briefcase' as IconName },
  ],
  stack: [
    { title: 'Frontend', items: ['React', 'Next.js', 'SASS'] },
    { title: 'Backend', items: ['Node.js', 'REST APIs'] },
    { title: 'Tools', items: ['Vercel', 'Cloud Services'] },
  ],
  architecture: {
    center: 'fallback_arch_center',
    inputs: ['fallback_arch_input_1', 'fallback_arch_input_2'],
    outputs: ['API', 'Database', 'fallback_arch_output_3'],
  },
  process: commonProcess,
  previews: [],
}));

export const allProjectCaseStudies = [...projectCaseStudies, ...fallbackCaseStudies];
