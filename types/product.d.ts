export interface ProductContent {
  product: Record<string, ProductCompleteItem>;
}
export interface ProductCompleteItem {
  title: string;
  category: string;
  offer: "si" | "no";
  image: string;
  description: string;
}
