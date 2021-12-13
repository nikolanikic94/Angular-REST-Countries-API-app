import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Country } from '../model/Country.model';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  allCountriesURL = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.allCountriesURL}/all`)
      .pipe(map((response) => response.map((country) => new Country(country))));
  }

  getCountriesByRegion(filter: string): Observable<Country[]> {
    if (filter === 'all') {
      return this.http
        .get<Country[]>(`${this.allCountriesURL}/all`)
        .pipe(
          map((response) => response.map((country) => new Country(country)))
        );
    }
    return this.http
      .get<Country[]>(`${this.allCountriesURL}/region/${filter}`)
      .pipe(map((response) => response.map((country) => new Country(country))));
  }

  searchByName(name: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.allCountriesURL}/name/${name}`)
      .pipe(map((response) => response.map((country) => new Country(country))));
  }

  getOneCountry(name: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.allCountriesURL}/name/${name}`)
      .pipe(map((response) => response.map((country) => new Country(country))));
  }
}
