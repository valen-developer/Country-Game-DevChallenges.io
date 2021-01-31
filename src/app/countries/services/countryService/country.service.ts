import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private url: string = 'https://restcountries.eu/rest/v2/all';

  constructor(private http: HttpClient) {}

  public async getAll(): Promise<any> {
    try {
      const resp: any = await this.http.get(this.url).toPromise();
      return resp;
    } catch (error) {
      return [];
    }
  }
}
