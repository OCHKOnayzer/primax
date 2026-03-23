export interface CardData {
  name: string;
  images: string[];
  price: number;
  sale?: number;
}

export interface CardTypes {
  card: CardData[];
}
