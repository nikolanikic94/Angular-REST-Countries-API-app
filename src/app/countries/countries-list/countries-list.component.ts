import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/model/Country.model';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css'],
})
export class CountriesListComponent implements OnInit {
  @Input() countries: Country[];

  constructor() {
    this.countries = [];
  }

  ngOnInit(): void {}
}
