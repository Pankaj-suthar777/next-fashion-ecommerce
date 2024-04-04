export interface ProductDetails {
  name: string;
  description: string;
  brand: string;
  price: number;
  countInStock: number;
  image?: Array<string>;
  category?: string;
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
  reviews?: Array<any>;
}
