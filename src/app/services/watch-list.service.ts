import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WatchListService {
  constructor(private http: HttpClient) {}
  getMovieList() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=391d402928dd26be93f24ece2b7bdeaa'
    );
  }
}
