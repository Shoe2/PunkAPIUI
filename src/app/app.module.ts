import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { ListOfBeersComponent } from './components/list-of-beers/list-of-beers.component';
import { BeerComponent } from './components/beer/beer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FilterBarComponent,
    ListOfBeersComponent,
    BeerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
