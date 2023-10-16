import { Component } from '@angular/core';
import { MovieApiService } from '../services/movie-api.service';
@Component({
  selector: 'app-movie-app',
  templateUrl: './movie-app.component.html',
  styleUrls: ['./movie-app.component.css']
})
export class MovieAppComponent {

  constructor (private movieService: MovieApiService ){}
  ngOnInit() {
    this.movieService.getMovieList().subscribe(( data )=>console.log(data)
     )
  }
   

}
