import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  value: string;
  @Output() countryNameEmitter = new EventEmitter();
  constructor() {
    this.value = '';
  }

  ngOnInit(): void {}

  searchCountryByName() {
    this.countryNameEmitter.emit(this.value);
  }
}
