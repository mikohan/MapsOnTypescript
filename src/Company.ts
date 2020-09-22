import faker from 'faker';
import { Mappable } from './Interfase';

export class Company implements Mappable {
  companyName: string;
  catchPhase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
        <h2>Company Name: ${this.companyName}</h2>
        <h3>CatchPrase: ${this.catchPhase}</h3>
    </div>`;
  }
}
