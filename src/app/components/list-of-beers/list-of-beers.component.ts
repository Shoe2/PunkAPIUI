import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/classes/beer';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'list-of-beers',
  templateUrl: './list-of-beers.component.html',
  styleUrls: ['./list-of-beers.component.css']
})
export class ListOfBeersComponent implements OnInit {

  beers: Beer[] = [];
  
  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
    this.beerService.beers.subscribe(Beers => this.beers = Beers);
  }

}
