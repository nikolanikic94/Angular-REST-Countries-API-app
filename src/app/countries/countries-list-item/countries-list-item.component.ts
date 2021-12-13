import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/model/Country.model';

@Component({
  selector: 'app-countries-list-item',
  templateUrl: './countries-list-item.component.html',
  styleUrls: ['./countries-list-item.component.css'],
})
export class CountriesListItemComponent implements OnInit {
  @Input() country: Country;

  constructor() {
    this.country = new Country();
  }

  ngOnInit(): void {}
}
