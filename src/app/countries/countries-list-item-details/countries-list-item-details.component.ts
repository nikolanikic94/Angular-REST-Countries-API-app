import { keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/model/Country.model';
import { Currency } from 'src/app/model/Currency.model';

import { CountryService } from 'src/app/service/country.service';

@Component({
  selector: 'app-countries-list-item-details',
  templateUrl: './countries-list-item-details.component.html',
  styleUrls: ['./countries-list-item-details.component.css'],
})
export class CountriesListItemDetailsComponent implements OnInit {
  country: Country;
  borders: string[] = [];
  languages: string[] = [];
  currencies: Currency[] = [];
  currenciesNames: string[] = [];

  constructor(private service: CountryService, private route: ActivatedRoute) {
    this.country = new Country();
  }

  ngOnInit(): void {
    let name: string = JSON.stringify(this.route.snapshot.paramMap.get('name'));
    console.log(name);

    this.service.getOneCountry(name).subscribe((response) => {
      this.country = response[0];
      this.borders = this.country.$borders;
      this.languages = Object.values(this.country.$languages);
      this.currencies = Object.values(this.country.$currencies);
      this.currenciesNames = this.currencies.map((elem) => elem.name);
      console.log(this.currenciesNames);
      console.log(this.currencies);
    });
  }
}
