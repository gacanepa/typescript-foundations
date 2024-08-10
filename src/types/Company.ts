import { faker } from '@faker-js/faker';

export class Company {
  companyName: string;
  buzzPhrase: string;
  location: {
    latitude: number;
    longitude: number;
  };
  constructor() {
    this.companyName = faker.company.name();
    this.buzzPhrase = faker.company.buzzPhrase();
    this.location = {
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude(),
    };
  }
}
