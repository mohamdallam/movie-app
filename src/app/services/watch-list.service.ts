import { Injectable } from '@angular/core';
import { Details } from '../interfaces/details';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class WatchListService {
  public watchList :Array<Movie> = [];  
}
