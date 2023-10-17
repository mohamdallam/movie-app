import { Component, Input } from '@angular/core';
import { Movie } from '../interfaces/movie';
@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css'],
})
export class WatchListComponent {
  movies: Movie[] = [
    {
      adult: false,
      backdrop_path: '',
      genre_ids: [],
      id: 0,
      original_language: '',
      original_title: '',
      overview: '',
      popularity: 0,
      poster_path: '',
      release_date: '',
      title: '',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
  ];
  movieService: any;
  ngOnInit() {
    this.movieService.getMovies().subscribe((data: Movie[]) => {
      this.movies = data;
    });
  }
}
