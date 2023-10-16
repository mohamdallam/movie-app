import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieAppComponent } from './movie-app/movie-app.component';

const routes: Routes = [

  {
    path: "",
    component: MovieAppComponent 
  },

  {
    path: "Movie-Details/:id",
    component: MovieDetailsComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
