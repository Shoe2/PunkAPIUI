import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {
  title = 'Punk API UI';
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

  constructor() { }

  ngOnInit(): void {
  }

  filterBeers(){
    
  }

}
