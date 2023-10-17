import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  constructor(private http: HttpClient) {}

  private apiKey = '391d402928dd26be93f24ece2b7bdeaa';
  private baseUrl = 'https://api.themoviedb.org/3/movie/popular';

  getMovieList(page: number) {
    const url = `${this.baseUrl}?api_key=${this.apiKey}&page=${page}`;
    return this.http.get(url);
  }
}
