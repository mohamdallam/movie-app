import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieAppComponent } from './movie-app/movie-app.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: MovieAppComponent,
  },
  {
    path: 'watch-list',
    component: WatchListComponent,
  },

  {
    path: 'Movie-Details/:id',
    component: MovieDetailsComponent,
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
