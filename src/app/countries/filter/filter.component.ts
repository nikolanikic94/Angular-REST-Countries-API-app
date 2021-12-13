import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface Region {
  name: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  region: string;

  regions: Region[] = [
    { name: 'all' },
    { name: 'africa' },
    { name: 'america' },
    { name: 'asia' },
    { name: 'europe' },
    { name: 'oceania' },
  ];
  @Output() filterEmitter = new EventEmitter();
  constructor() {
    this.region = '';
  }

  ngOnInit(): void {}

  regionSelect() {
    this.filterEmitter.emit(this.region);
  }
}
