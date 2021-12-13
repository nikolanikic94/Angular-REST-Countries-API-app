import { Component, OnInit } from '@angular/core';
import { Country } from '../model/Country.model';
import { CountryService } from '../service/country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  public countries: Country[] = [];
  filterRegion: string = '';

  constructor(private service: CountryService) {}

  ngOnInit(): void {
    this.refreshCountries();
  }

  refreshCountries() {
    this.service.getAllCountries().subscribe((response) => {
      this.countries = response;
    });
  }

  filterByRegion(value: string) {
    this.filterRegion = value;
    this.service
      .getCountriesByRegion(this.filterRegion)
      .subscribe((response) => {
        this.countries = response;
        console.log(this.countries);
      });
  }

  searchByName(value: string) {
    this.service.searchByName(value).subscribe((response) => {
      this.countries = response;
    });
  }
}
