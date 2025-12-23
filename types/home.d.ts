export interface HomeContent {
  hero: Hero;
  services: Services;
  about: About;
  products: Products;
  impact: Impact;
  project: Projects;
  visit: Visit;
}

export interface Hero {
  main: {
    hero_tag: string;
    title: string;
    subtitle: string;
    hero_button_1: string;
    hero_button_2: string;
  };
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface Services {
  main: {
    title: string;
    description: string;
  };
  item_1: ServiceItem;
  item_2: ServiceItem;
  item_3: ServiceItem;
  item_4: ServiceItem;
  item_5: ServiceItem;
  item_6: ServiceItem;
  software: {
    title: string;
    description: string;
    botton: string;
  };
}

export interface About {
  main: {
    paragraph_1: string;
    paragraph_2: string;
    paragraph_3: string;
    item_1: string;
    item_2: string;
    item_3: string;
    item_4: string;
  };
}

export interface ProductItem {
  image: string;
  title: string;
  offer: "si" | "no";
  category: string;
  price?: number;
  offer_price?: number;
}

export interface Products {
  main: {
    title: string;
    description: string;
  };
  item_1: ProductItem;
  item_2: ProductItem;
  item_3: ProductItem;
  item_4: ProductItem;
}

export interface ImpactItem {
  number: string;
  title: string;
  description: string;
  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export interface Impact {
  main: {
    title: string;
    description: string;
  };
  item_1: ImpactItem;
  item_2: ImpactItem;
  item_3: ImpactItem;
}

export interface ProjectItem {
  title: string;
  client: string;
  impact: string;
}

export interface Projects {
  main: {
    title: string;
    description: string;
  };
  item_1: ProjectItem;
  item_2: ProjectItem;
  item_3: ProjectItem;
}

export interface ProjectItem {
  title: string;
  client: string;
  impact: string;
}

export interface Projects {
  main: {
    title: string;
    description: string;
  };
  item_1: ProjectItem;
  item_2: ProjectItem;
  item_3: ProjectItem;
}

export interface Visit {
  main: {
    title: string;
    description: string;
  };
  maps: {
    title: string;
  };
  ubication: {
    address: string;
    address_2: string;
  };
  phone: {
    title: string;
  };
  email: {
    title: string;
    title_2: string;
  };
  schedule: {
    normal: string;
    weekend: string;
  };
}
