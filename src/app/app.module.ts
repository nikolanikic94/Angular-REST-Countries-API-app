import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { CountriesComponent } from './countries/countries.component';
import { MaterialModule } from './material/material.module';
import { CountriesListComponent } from './countries/countries-list/countries-list.component';
import { CountriesListItemComponent } from './countries/countries-list-item/countries-list-item.component';
import { CountriesListItemDetailsComponent } from './countries/countries-list-item-details/countries-list-item-details.component';
import { PaginationComponent } from './countries/pagination/pagination.component';
import { FilterComponent } from './countries/filter/filter.component';
import { SearchComponent } from './countries/search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CountriesComponent,
    CountriesListComponent,
    CountriesListItemComponent,
    CountriesListItemDetailsComponent,
    PaginationComponent,
    FilterComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
