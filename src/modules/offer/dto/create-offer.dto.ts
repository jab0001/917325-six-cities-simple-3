import {RentType} from '../../../types/rent.enum.js';
import {IsArray, IsDateString, IsEnum, IsInt, Max, MaxLength, Min, MinLength, IsBoolean, IsString} from 'class-validator';

export default class CreateOfferDto {
  @MinLength(10, {message: 'Minimum title length must be 10'})
  @MaxLength(100, {message: 'Maximum title length must be 100'})
  public title!: string;

  @MinLength(20, {message: 'Minimum description length must be 20'})
  @MaxLength(1024, {message: 'Maximum description length must be 1024'})
  public description!: string;

  @IsDateString({}, {message: 'postDate must be valid ISO date'})
  public postDate!: Date;

  @MaxLength(256, {message: 'Too short for field «image»'})
  public offerPhoto!: string;

  @IsArray({message: 'Field categories must be an array'})
  public rentPhotos!: string[];

  @IsBoolean({ message: 'Field isPremium must be a boolean' })
  public premium!: boolean;

  @IsInt({message: 'Rating must be an integer'})
  public rating!: number;

  @IsEnum(RentType, {message: 'type must be Buy and Sell'})
  public typeOfRent!: RentType;

  @IsInt({message: 'Rooms must be an integer'})
  public rooms!: number;

  @IsInt({message: 'Guests must be an integer'})
  public guests!: number;

  @IsInt({message: 'Price must be an integer'})
  @Min(100, {message: 'Minimum price is 100'})
  @Max(200000, {message: 'Maximum price is 200000'})
  public price!: number;

  @IsArray({message: 'Field categories must be an array'})
  public features!: string[];

  public userId!: string;

  @IsInt({message: 'Price must be an integer'})
  public comments!: number;

  @IsString({message: 'avatarPath is required'})
  public coordinates!: string;
}
