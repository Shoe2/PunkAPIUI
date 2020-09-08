import { Injectable } from '@angular/core';
import { Filter } from '../classes/filter';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Beer } from '../classes/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  beersSource = new BehaviorSubject<Beer[]>([]);
  beers = this.beersSource.asObservable();

  constructor(private $http: HttpClient) { }

  getBeers(filter: Filter){
    let url = "https://api.punkapi.com/v2/beers?brewed_before=";
    url += (filter.brewed_before.getMonth() + "-" + filter.brewed_before.getFullYear() + "&brewed_after=" + filter.brewed_after.getMonth() + "-" + filter.brewed_after.getFullYear());

    filter.abv != null && filter.abvLessOrGreater === "greaterThan" ? url += ("&abv_gt=" + filter.abv) : [/*do nothing */];
    filter.abv != null && filter.abvLessOrGreater === "lessThan" ? url += ("&abv_lt=" + filter.abv) : [/*do nothing */];
    filter.ibu != null && filter.ibuLessOrGreater === "greaterThan" ? url += ("&ibu_gt=" + filter.ibu) : [/*do nothing */];
    filter.ibu != null && filter.ibuLessOrGreater === "lessThan" ? url += ("&ibu_lt=" + filter.ibu) : [/*do nothing */];
    filter.ebc != null && filter.ebcLessOrGreater === "greaterThan" ? url += ("&ebc_gt=" + filter.ebc) : [/*do nothing */];
    filter.ebc != null && filter.ebcLessOrGreater === "lessThan" ? url += ("&ebc_lt=" + filter.ebc) : [/*do nothing */];
    filter.beer_name != null ? url += ("&beer_name=" + filter.beer_name) : [/*do nothing */];
    filter.yeast != null ? url += ("&yeast=" + filter.yeast) : [/*do nothing */];
    filter.hops != null ? url += ("&hops=" + filter.hops) : [/*do nothing */];
    filter.malt != null ? url += ("&malt=" + filter.malt) : [/*do nothing */];
    filter.food != null ? url += ("&food=" + filter.food) : [/*do nothing */];

    this.$http.get(url)
    .pipe(catchError((error: HttpErrorResponse)=>{
      console.log(error);
      return throwError(error);
    }))
    .subscribe((response: Beer[])=>{
        this.beersSource.next(response);
    });
  }
}
