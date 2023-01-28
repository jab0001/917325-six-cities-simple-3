import {Expose} from 'class-transformer';
import {RentType} from '../../../types/rent.enum.js';

export default class OfferResponse {
  @Expose()
  public title!: string;

  @Expose()
  public description!: string;

  @Expose()
  public postDate!: Date;

  @Expose()
  public city!: string;

  @Expose()
  public offerPhoto!: string;

  @Expose()
  public rentPhotos!: string[];

  @Expose()
  public premium!: boolean;

  @Expose()
  public rating!: number;

  @Expose()
  public typeOfRent!: RentType;

  @Expose()
  public rooms!: number;

  @Expose()
  public guests!: number;

  @Expose()
  public price!: number;

  @Expose()
  public features!: string[];

  @Expose()
  public userId!: string;

  @Expose()
  public comments!: number;

  @Expose()
  public coordinates!: string;
}
