export interface ProductContent {
  product: {
    main: {
      description: string;
    };
    [key: string]: ProductCompleteItem;
  };
}
export interface ProductCompleteItem {
  title: string;
  category: string;
  offer: "si" | "no";
  image: string;
  hover_image_url: string;
  description: string;
}
