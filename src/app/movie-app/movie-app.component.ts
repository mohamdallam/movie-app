import { Component } from '@angular/core';
import { MovieApiService } from '../services/movie-api.service';
import { Movie } from '../interfaces/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-app',
  templateUrl: './movie-app.component.html',
  styleUrls: ['./movie-app.component.css'],
})
export class MovieAppComponent {
  AllMovies!: Array<Movie>;

  constructor(private movieService: MovieApiService, private router: Router) {}
  ngOnInit() {
    this.movieService
      .getMovieList()
      .subscribe((data: any) => (this.AllMovies = data.results));
  }

  redirectToDetails(id: any) {
    this.router.navigate(['Product-details', id]);
  }
}
