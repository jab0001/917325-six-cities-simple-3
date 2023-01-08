import dayjs from 'dayjs';

import { MockData } from '../../types/mock-data.type.js';
import { RentType } from '../../types/rent.enum.js';
import { generateRandomValue, getRandomItem, getRandomItems, generateRandomFlag } from '../../utils/random.js';
import { OfferGeneratorInterface } from './offer-generator.interface.js';

enum CountsLimits {
    MIN_PRICE = 100,
    MAX_PRICE = 100000,
    MIN_RATING = 1,
    MAX_RATING = 5,
    MIN_ROOMS = 1,
    MAX_ROOMS = 8,
    MIN_GUESTS = 1,
    MAX_GUESTS = 10,
    MIN_COMMENTS = 0,
    MAX_COMMENTS = 100,
    FIRST_WEEK_DAY = 1,
    LAST_WEEK_DAY = 7
}


export default class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const postDate = dayjs().subtract(generateRandomValue(CountsLimits.FIRST_WEEK_DAY, CountsLimits.LAST_WEEK_DAY), 'day').toISOString();
    const city = getRandomItem<string>(this.mockData.citys);
    const offerPhoto = getRandomItem<string>(this.mockData.offerPhotos);
    const rentPhoto = getRandomItems<string>(this.mockData.rentPhotos).join(';');
    const premium = generateRandomFlag();
    const rating = generateRandomValue(CountsLimits.MIN_RATING, CountsLimits.MAX_RATING).toString();
    const typeOfRent = getRandomItem([RentType.apartment, RentType.house, RentType.room, RentType.hotel]);
    const rooms = generateRandomValue(CountsLimits.MIN_ROOMS, CountsLimits.MAX_ROOMS).toString();
    const guests = generateRandomValue(CountsLimits.MIN_GUESTS, CountsLimits.MAX_GUESTS).toString();
    const price = generateRandomValue(CountsLimits.MIN_PRICE, CountsLimits.MAX_PRICE).toString();
    const features = getRandomItems<string>(this.mockData.features).join(';');
    const user = getRandomItem<string>(this.mockData.users);
    const comments = generateRandomValue(CountsLimits.MIN_COMMENTS, CountsLimits.MAX_COMMENTS).toString();
    const coordinates = getRandomItem<string>(this.mockData.coordinates);

    return [
      title,
      description,
      postDate,
      city,
      offerPhoto,
      rentPhoto,
      premium,
      rating,
      typeOfRent,
      rooms,
      guests,
      price,
      features,
      user,
      comments,
      coordinates,
    ].join('\t');
  }
}
