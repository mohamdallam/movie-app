import { Component } from '@angular/core';
import { MovieApiService } from '../services/movie-api.service';
import { Movie } from '../interfaces/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { WatchListService } from '../services/watch-list.service';

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
    private route: ActivatedRoute,
    public watchListService: WatchListService
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

  addToWatchList(movie: Movie) {
    console.log(movie);

    var isMovieInList =
      this.watchListService.watchList.filter((x) => x.id === movie.id).length >
      0;

    if (isMovieInList) {
      this.watchListService.watchList = this.watchListService.watchList.filter(
        (x) => x.id !== movie.id
      );
    } else {
      this.watchListService.watchList.push(movie);
    }
  }

  isMovieInWatchList(movie: Movie) {
    return this.watchListService.watchList.filter((x) => x.id === movie.id).length >
      0;
  }
}
