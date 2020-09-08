import { Component, OnInit, Input } from '@angular/core';
import { Beer } from 'src/app/classes/beer';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
  @Input() beer: Beer;

  constructor() { }

  ngOnInit(): void {
  }

}
