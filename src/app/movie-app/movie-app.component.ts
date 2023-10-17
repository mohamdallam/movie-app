import { Component } from '@angular/core';
import { MovieApiService } from '../services/movie-api.service';
import { Movie } from '../interfaces/movie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-app',
  templateUrl: './movie-app.component.html',
  styleUrls: ['./movie-app.component.css'],
})
export class MovieAppComponent {
  AllMovies!: Array<Movie>;
  currentPage = 1;

  constructor(
    private movieService: MovieApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // ngOnInit() {
  //   this.movieService
  //     .getMovieList()
  //     .subscribe((data: any) => (this.AllMovies = data.results));
  // }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const page = params['page'];
      if (page) {
        this.currentPage = +page;
      }

      this.loadMovieList(this.currentPage);
    });
  }

  loadMovieList(page: number) {
    this.movieService.getMovieList(page).subscribe((data: any) => {
      this.AllMovies = data.results;
    });
  }

  goToPage(page: number) {
    if (page < 1) {
      return;
    }

    this.currentPage = page;
    this.loadMovieList(page);
  }

  redirectToDetails(id: any) {
    this.router.navigate(['Product-details', id]);
  }
}
