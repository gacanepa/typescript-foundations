import { faker } from '@faker-js/faker';

export class Person {
  name: string;
  age: number;
  gender: string;
  location: {
    latitude: number;
    longitude: number;
  };
  constructor() {
    this.name = faker.person.fullName();
    this.age = faker.number.int({ min: 18, max: 99 });
    this.gender = faker.person.sex();
    this.location = {
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude(),
    };
  }
}
