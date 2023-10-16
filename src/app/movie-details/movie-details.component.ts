import { Component } from '@angular/core';
import { MovieDetailsService } from '../services/movie-details.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../interfaces/movie';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  movieDetails !: Movie 
  

  constructor(private moviesDetailsService: MovieDetailsService ,private activatedRoute: ActivatedRoute) {}
  ngOnInit() {

console.log(this.activatedRoute.snapshot.params['id']);

    this.moviesDetailsService.getMovieDetails
    (this.activatedRoute.snapshot.params['id'])
    .subscribe((data :any) =>this.movieDetails = data)
  }

}
