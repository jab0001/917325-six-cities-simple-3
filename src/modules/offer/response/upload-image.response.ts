import {Expose} from 'class-transformer';

export default class UploadImageResponse {
  @Expose()
  public offerPhoto!: string;
}
