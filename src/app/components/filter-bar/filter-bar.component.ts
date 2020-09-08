import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/services/beer.service';
import { Filter } from 'src/app/classes/filter';

@Component({
  selector: 'filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {
  title = 'Punk API UI';
  isCollapsed = false;

  abv: number = null;
  ibu: number = null;
  ebc: number = null;
  abvLessOrGreater: string = "lessThan";
  ibuLessOrGreater: string = "lessThan";
  ebcLessOrGreater: string = "lessThan";
  beer_name:	string = null;
  yeast: string = null;
  brewed_before = new Date (Date.now());
  brewed_after = new Date(1970, 1, 1); 
  hops: string = null;
  malt: string = null;
  food: string = null;

  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
    this.filterBeers();
  }

  filterBeers(){
    const filter = new Filter;
    filter.abv = this.abv;
    filter.ibu = this.ibu;
    filter.ebc = this.ebc;
    filter.abvLessOrGreater = this.abvLessOrGreater;
    filter.ibuLessOrGreater = this.ibuLessOrGreater;
    filter.ebcLessOrGreater = this.ebcLessOrGreater;
    filter.beer_name = this.beer_name;
    filter.yeast = this.yeast;
    filter.brewed_before = this.brewed_before;
    filter.brewed_after = this.brewed_after; 
    filter.hops = this.hops;
    filter.malt = this.malt;
    filter.food = this.food;

    this.beerService.getBeers(filter);
  }

}
