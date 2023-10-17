import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  wishMovies = new BehaviorSubject<Movie[]>([]);
  localMovie: Movie[] = [];

  constructor() {}

  getWishedMovies() {
    return this.wishMovies.asObservable();
  }
}
