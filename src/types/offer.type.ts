import { Category } from './category.type.js';
import { User } from './user.type.js';

export type Offer = {
  title: string;
  description: string;
  postDate: Date;
  city: string;
  image: string;
  categories: Category[];
  premium: boolean;
  rating: number;
  typeOfRent: string;
  rooms: number;
  guests: number;
  price: number;
  features: Category[];
  user: User;
  comments: number;
  coordinates: string;
}
