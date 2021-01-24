import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {RestaurantComponent} from "../components/restaurant/restaurant.component";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private baseUrl = 'http://localhost:8080/api/restaurants';

  constructor(private httpClient: HttpClient) { }


  getRestaurantList(): Observable<RestaurantComponent[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
    map(response => response._embeded.restaurants)
    )
  }

}

interface GetResponse {
  _embeded: {
    restaurants: RestaurantComponent[];
  }
}
