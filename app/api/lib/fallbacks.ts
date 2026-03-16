import type { ConfigContent } from "@/types/general";
import type { HomeContent } from "@/types/home";
import type { ProductContent } from "@/types/product";
import type { VideosContent } from "@/types/videos";
import type { EmployeesContent } from "@/types/employee";

// ─────────────────────────────────────────────
// LAYOUT  (General sheet)
// ─────────────────────────────────────────────
export const fallbackLayout: ConfigContent = {
  config: {
    navbar: {
      nav_home: "Inicio",
      nav_services: "Servicios",
      nav_our: "Nosotros",
      nav_products: "Productos",
      nav_diy: "Hágalo Usted Mismo",
      nav_employee: "Empleados",
      nav_button: "Consultar",
    },
  },
  footer: {
    main: {
      description:
        "Proveedor líder de equipos médicos y servicios biomédicos especializados en Colombia.",
      email: "info@biomedicalendowment.com",
      phone: "+57 321 378 4799",
    },
  },
  whatsapp: {
    main: {
      title: "¿Necesitas ayuda?",
      description: "Estamos disponibles para atenderte por WhatsApp.",
      button: "Chatear ahora",
      init_message:
        "Hola, me gustaría obtener más información sobre sus equipos y servicios biomédicos.",
    },
  },
};

// ─────────────────────────────────────────────
// HOME  (Inicio sheet)
// ─────────────────────────────────────────────
export const fallbackHome: HomeContent = {
  hero: {
    main: {
      hero_tag: "Soluciones Biomédicas de Confianza",
      title: "Equipos Médicos de Alta Calidad para tu Institución",
      subtitle:
        "Proveemos, instalamos y mantenemos equipos biomédicos con los más altos estándares de calidad para clínicas y hospitales en Colombia.",
      hero_button_1: "Ver Productos",
      hero_button_2: "Contáctanos",
    },
  },
  services: {
    main: {
      title: "Nuestros Servicios",
      description:
        "Soluciones integrales para el cuidado y mantenimiento de equipos médicos.",
    },
    item_1: {
      title: "Mantenimiento Preventivo",
      description:
        "Revisiones periódicas para garantizar el óptimo funcionamiento de tus equipos.",
    },
    item_2: {
      title: "Mantenimiento Correctivo",
      description:
        "Diagnóstico y reparación rápida para minimizar tiempos de inactividad.",
    },
    item_3: {
      title: "Instalación de Equipos",
      description:
        "Instalación profesional y puesta en marcha de equipos biomédicos.",
    },
    item_4: {
      title: "Calibración",
      description:
        "Calibración certificada para asegurar la precisión de tus instrumentos médicos.",
    },
    item_5: {
      title: "Capacitación",
      description:
        "Formación al personal técnico y clínico para el uso correcto de los equipos.",
    },
    item_6: {
      title: "Venta de Repuestos",
      description:
        "Repuestos originales y compatibles para todas las marcas que manejamos.",
    },
    software: {
      title: "Software de Gestión Biomédica",
      description:
        "Administra el inventario y el historial de mantenimiento de tus equipos desde un solo lugar.",
      description_2:
        "Accede a reportes, alertas de mantenimiento y trazabilidad completa.",
      botton: "Conocer más",
    },
    warranty: {
      title: "Garantía en todos nuestros servicios",
      description:
        "Respaldamos cada intervención con garantía escrita y soporte post-servicio.",
    },
  },
  about: {
    main: {
      paragraph_1:
        "Somos una empresa colombiana especializada en la provisión y mantenimiento de equipos biomédicos para el sector salud.",
      paragraph_2:
        "Contamos con un equipo de ingenieros biomédicos certificados con más de 10 años de experiencia en el sector.",
      paragraph_3:
        "Nuestro compromiso es garantizar que cada equipo funcione con precisión y seguridad, protegiendo tanto a los pacientes como al personal de salud.",
      item_1: "Ingenieros certificados",
      item_2: "Atención personalizada",
      item_3: "Servicio en todo Colombia",
      item_4: "Garantía en cada servicio",
    },
  },
  products: {
    main: {
      title: "Productos Destacados",
      description: "Conoce algunos de nuestros equipos más solicitados.",
    },
    item_1: {
      image: "/test-image.webp",
      title: "Ventilador Mecánico",
      offer: "no",
      category: "Ventilación",
    },
    item_2: {
      image: "/test-image.webp",
      title: "Monitor de Signos Vitales",
      offer: "si",
      category: "Monitoreo",
    },
    item_3: {
      image: "/test-image.webp",
      title: "Desfibrilador",
      offer: "no",
      category: "Emergencias",
    },
    item_4: {
      image: "/test-image.webp",
      title: "Bomba de Infusión",
      offer: "si",
      category: "Infusión",
    },
  },
  impact: {
    main: {
      title: "Nuestro Impacto",
      description:
        "Años de experiencia respaldan cada uno de nuestros servicios.",
    },
    item_1: { title: "+500", description: "Equipos mantenidos" },
    item_2: { title: "+100", description: "Clientes satisfechos" },
    item_3: { title: "+10", description: "Años de experiencia" },
    item_4: { title: "24/7", description: "Soporte técnico" },
    item_5: { title: "100%", description: "Garantía en servicios" },
  },
  project: {},
  visit: {
    main: {
      title: "Visítanos",
      description:
        "Estamos ubicados en Colombia. Agenda una visita o contáctanos directamente.",
    },
    maps: {
      title: "Ver en Google Maps",
    },
    ubication: {
      address: "Colombia",
      address_2: "",
    },
    phone: {
      title: "+57 321 378 4799",
    },
    email: {
      title: "info@biomedicalendowment.com",
      title_2: "ventas@biomedicalendowment.com",
    },
    schedule: {
      normal: "Lunes a Viernes: 8:00 am – 6:00 pm",
      weekend: "Sábados: 8:00 am – 12:00 pm",
    },
  },
};

// ─────────────────────────────────────────────
// PRODUCTS  (Productos sheet)
// ─────────────────────────────────────────────
export const fallbackProducts = {
  product: {
    item_1: {
      title: "Ventilador Mecánico",
      category: "Ventilación",
      offer: "no",
      image: "/test-image.webp",
      hover_image_url: "/test-image.webp",
      description:
        "Ventilador de alto rendimiento para soporte respiratorio en UCI y emergencias.",
    },
    main: {
      description:
        "Explora nuestro catálogo de equipos médicos y biomédicos de alta calidad.",
    },
  },
};

// ─────────────────────────────────────────────
// VIDEOS  (Videos sheet)
// ─────────────────────────────────────────────
export const fallbackVideos = {
  videos: {
    main: {
      description:
        "Tutoriales prácticos para el mantenimiento y operación de equipos biomédicos.",
      help: "¿Necesitas ayuda adicional? Nuestro equipo técnico está disponible para asistirte.",
    },
    item_1: {
      title: "Mantenimiento básico de ventiladores",
      description:
        "Aprende los pasos esenciales para el mantenimiento preventivo de ventiladores mecánicos.",
      videoId: "dQw4w9WgXcQ",
    },
  },
};

// ─────────────────────────────────────────────
// EMPLOYEES  (Empleados sheet)
// ─────────────────────────────────────────────
export const fallbackEmployees: EmployeesContent = {
  empleados: {
    main: {
      description:
        "Accede a las plataformas internas de Biomedical Endowment para empleados.",
    },
    samm: {
      title: "SAMM",
      subtitle: "Sistema de Gestión de Mantenimiento",
      description:
        "Gestiona órdenes de trabajo, historial de equipos y reportes de mantenimiento.",
      item_1: "Órdenes de trabajo",
      item_2: "Historial de equipos",
      item_3: "Reportes y estadísticas",
    },
    rrhh: {
      title: "BUK",
      subtitle: "Plataforma de Recursos Humanos",
      description:
        "Consulta tu información laboral, nómina y solicitudes de RRHH.",
      item_1: "Desprendibles de pago",
      item_2: "Solicitud de permisos",
      item_3: "Información laboral",
    },
    help: {
      title: "¿Necesitas ayuda?",
      description:
        "Contacta al área de soporte interno para asistencia con las plataformas.",
    },
  },
};
