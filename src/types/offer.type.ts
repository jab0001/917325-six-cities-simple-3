import { RentType } from './rent.enum.js';

export type Offer = {
    title: string;
    description: string;
    postDate: Date;
    city: string;
    offerPhoto: string;
    rentPhotos: string[];
    premium: boolean;
    rating: number;
    typeOfRent: RentType;
    rooms: number;
    guests: number;
    price: number;
    features: string[];
    user: string;
    comments: number;
    coordinates: string;
}
