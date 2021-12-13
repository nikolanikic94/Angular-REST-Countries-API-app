import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesListItemDetailsComponent } from './countries/countries-list-item-details/countries-list-item-details.component';
import { CountriesComponent } from './countries/countries.component';

const routes: Routes = [
  { path: 'countries', component: CountriesComponent },
  { path: 'countries/:name', component: CountriesListItemDetailsComponent },
  { path: '', redirectTo: 'countries', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
