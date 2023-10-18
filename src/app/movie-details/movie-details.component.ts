import { Component } from '@angular/core';
import { MovieDetailsService } from '../services/movie-details.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../interfaces/movie';
import { Genres } from '../interfaces/genres';
import { Details } from '../interfaces/details';
import { Languages } from '../interfaces/languages';
import { Companies } from '../interfaces/companies';
import { MovieRecommendationService } from '../services/movie-recommendation.service';
import { Recommendation } from '../interfaces/recommendation';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  movieDetails!: Details;
  genres!: Genres[];
  languages!: Languages[];
  companies!: Companies;

  movieRecommendation!: Array<Recommendation>;

  constructor(
    private moviesDetailsService: MovieDetailsService,
    private activatedRoute: ActivatedRoute,
    private movieRecommendationService: MovieRecommendationService
  ) {}
  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params['id']);

    this.moviesDetailsService
      .getMovieDetails(this.activatedRoute.snapshot.params['id'])
      .subscribe((data: any) => {
        (this.movieDetails = data),
          (this.genres = data.genres),
          (this.languages = data.spoken_languages),
          (this.companies = data.production_companies);
        console.log(this.companies);
      });

    this.movieRecommendationService
      .getMovieRecommendation()
      .subscribe((dataRec: any) => {
        this.movieRecommendation = dataRec.results;
        console.log(dataRec);
      });
  }
}
