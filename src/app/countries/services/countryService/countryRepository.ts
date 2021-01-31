import { Injectable } from '@angular/core';
import { Country } from 'src/domain/country';
import { CountryService } from './country.service';

@Injectable({
  providedIn: 'root',
})
export class CountryRepository {
  private countries: Country[];

  constructor(private countryService: CountryService) {
    this.countries = new Array<Country>();
  }

  private async setAllFromJsonList(): Promise<void> {
    const jsonList: any[] = await this.countryService.getAll();

    jsonList.forEach((item) => {
      if (item.capital)
        this.countries.push(new Country(item.name, item.capital, item.flag));
    });
  }

  public async getRamdonCountry(): Promise<Country> {
    if (!(this.countries.length > 0)) await this.setAllFromJsonList();

    return this.countries[Math.floor(Math.random() * this.countries.length)];
  }
}
