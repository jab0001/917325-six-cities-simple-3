import {RentType} from '../../../types/rent.enum.js';

export default class CreateOfferDto {
  public title!: string;
  public description!: string;
  public postDate!: Date;
  public city!: string;
  public offerPhoto!: string;
  public rentPhoto!: string[];
  public premium!: boolean;
  public rating!: number;
  public typeOfRent!: RentType;
  public rooms!: number;
  public guests!: number;
  public price!: number;
  public features!: string[];
  public userId!: string;
  public comments!: number;
  public coordiantes!: string;
}
