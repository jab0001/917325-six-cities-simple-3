import { readFileSync } from 'fs';
/* import { OfferType } from '../../types/offer-type.enum.js'; */
import { Offer } from '../../types/offer.type.js';
import { FileReaderInterface } from './file-reader.interface.js';

export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(([title,description,createdDate,city,image,categories,premium,rating,typeOfRent,rooms,guests,price,features,firstname, lastname, email, avatarPath,comments,coordinates]) => ({
        title,
        description,
        postDate: new Date(createdDate),
        city,
        image,
        categories: categories.split(';')
          .map((name) => ({name})),
        premium: !!Number.parseInt(premium, 10),
        rating: Number.parseInt(rating, 10),
        typeOfRent,
        rooms: Number.parseInt(rooms, 10),
        guests: Number.parseInt(guests, 10),
        price: Number.parseInt(price, 10),
        features: features.split(';')
        .map((name) => ({name})),
        user: {email, firstname, lastname, avatarPath},
        comments: Number.parseInt(comments, 10),
        coordinates
      }));
  }
}