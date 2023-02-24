import {IsEmail, IsString, Length, IsBoolean} from 'class-validator';
export default class CreateUserDto {
  @IsEmail({}, {message: 'email must be valid address'})
  public email!: string ;

  @IsString({message: 'firstname is required'})
  @Length(1, 15, {message: 'Min length is 1, max is 15'})
  public firstname!: string;

  @IsBoolean({ message: 'Field isPremium must be a boolean' })
  public isPro!: boolean;

  @IsString({message: 'lastname is required'})
  @Length(1, 15, {message: 'Min length is 1, max is 15'})
  public lastname!: string;

  @IsString({message: 'password is required'})
  @Length(6, 12, {message: 'Min length for password is 6, max is 12'})
  public password!: string;
}
