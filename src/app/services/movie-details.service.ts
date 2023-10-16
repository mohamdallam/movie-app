import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {

  constructor(private http: HttpClient) {}
  getMovieDetails(id :string) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=391d402928dd26be93f24ece2b7bdeaa`)
        }}
