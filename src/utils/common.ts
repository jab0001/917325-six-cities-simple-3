import { RentType } from '../types/rent.enum.js';
import { Offer } from '../types/offer.type.js';

export const createOffer = (row: string) => {
  const tokens = row.replace('\n', '').split('\t');
  const [title,
    description,
    postDate,
    city,
    offerPhoto,
    rentPhotos,
    premium,
    rating,
    typeOfRent,
    rooms,
    guests,
    price,
    features,
    user,
    comments,
    coordinates] = tokens;
  return {
    title,
    description,
    postDate: new Date(postDate),
    city,
    offerPhoto,
    rentPhotos: rentPhotos.split(';'),
    premium: Boolean(premium),
    rating: Number.parseInt(rating, 10),
    typeOfRent: RentType[typeOfRent as 'apartment' | 'house' | 'room' | 'hotel'],
    rooms: Number.parseInt(rooms, 10),
    guests: Number.parseInt(guests, 10),
    price: Number.parseInt(price, 10),
    features: features.split(';'),
    user,
    comments: Number.parseInt(comments, 10),
    coordinates,
  } as Offer;
};

export const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : '';