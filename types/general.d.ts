export interface ConfigContent {
  config: Config;
  footer: Footer;
  whatsapp: Whatsapp;
}

export interface Config {
  global: {
    site_name: string;
  };
  navbar: {
    nav_home: string;
    nav_services: string;
    nav_our: string;
    nav_products: string;
    nav_diy: string;
    nav_button: string;
  };
}

export interface Footer {
  main: {
    title: string;
    description: string;
    email: string;
    phone: string;
  };
}

export interface Whatsapp {
  main: {
    title: string;
    description: string;
    button: string;
    init_message: string;
  };
}
