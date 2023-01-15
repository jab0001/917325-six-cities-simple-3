import typegoose, {defaultClasses, getModelForClass, Ref} from '@typegoose/typegoose';
import {RentType} from '../../types/rent.enum.js';
import {UserEntity} from '../user/user.entity.js';

const {prop, modelOptions} = typegoose;

export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop()
  public title!: string;

  @prop({trim: true})
  public description!: string;

  @prop()
  public postDate!: Date;

  @prop({trim: true})
  public city!: string;

  @prop({trim: true})
  public offerPhoto!: string;

  @prop()
  public rentPhoto!: string[];

  @prop({default: false})
  public premium!: boolean;

  @prop({default: 0})
  public rating!:number;

  @prop({
    type: () => String,
    enum: RentType
  })
  public typeOfRent!: RentType;

  @prop({default: 1})
  public rooms!: number;

  @prop({default: 1})
  public guests!: number;

  @prop({default: 0})
  public price!: number;

  @prop()
  public features!: string[];

  @prop({
    ref: UserEntity,
    required: true
  })
  public userId!: Ref<UserEntity>;

  @prop({default: 0})
  public comments!: number;

  @prop()
  public coordinates!: string;
}

export const OfferModel = getModelForClass(OfferEntity);
