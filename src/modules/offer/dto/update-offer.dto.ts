import {RentType} from '../../../types/rent.enum.js';
import {IsArray, IsDateString, ArrayMaxSize, ArrayMinSize, IsEnum, IsOptional, Length, IsInt, Max, MaxLength, Min, MinLength, IsBoolean, IsString} from 'class-validator';
export default class UpdateOfferDto {
  @IsOptional()
  @MinLength(10,{message: 'Minimum title length must be 10'})
  @MaxLength(100, {message: 'Maximum title length must be 100'})
  public title?: string;

  @IsOptional()
  @Length(10, 100, { message: 'Description length must be between 10 and 100' })
  public description?: string;

  @IsOptional()
  @IsDateString({}, { message: 'Date must be valid ISO date' })
  public postDate?: Date;

  @IsOptional()
  public city?: string;

  @IsOptional()
  @IsString({ message: 'Preview image is required' })
  public offerPhoto?: string;

  @IsOptional()
  @IsArray({ message: 'Images must be array' })
  @ArrayMinSize(1, { message: 'Minimum must be 1 pictures' })
  @ArrayMaxSize(6, { message: 'Maximum must be 6 pictures' })
  public rentPhotos?: string[];

  @IsOptional()
  @IsBoolean({ message: 'Field premium must be a boolean type' })
  public premium?: boolean;

  @IsOptional()
  @Min(1, { message: 'Minimum rating must be 1' })
  @Max(5, { message: 'Maximum rating must be 5' })
  public rating?: number;

  @IsOptional()
  @IsEnum(RentType, { message: 'TypeOfRent must be specific value' })
  public typeOfRent?: RentType;

  @IsOptional()
  @IsInt({ message: 'Rooms must be integer type' })
  @Min(1, { message: 'Minimum rooms must be 1' })
  @Max(8, { message: 'Maximum rooms must be 8' })
  public rooms?: number;

  @IsOptional()
  @IsInt({ message: 'MaxGuests must be integer type' })
  @Min(1, { message: 'Minimum guests must be 1' })
  @Max(10, { message: 'Maximum guests must be 10' })
  public guests?: number;

  @IsOptional()
  @Min(100, { message: 'Minimum price must be 100' })
  @Max(100000, { message: 'Maximum price must be 100 000' })
  public price?: number;


  @IsOptional()
  @IsArray({ message: 'Goods must be an array' })
  public features?: string[];

  @IsOptional()
  @IsInt({ message: 'comments must be integer type' })
  public comments?: number;

  @IsOptional()
  @IsString({ message: 'coordinates image is required' })
  public coordinates?: string;
}
