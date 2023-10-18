import { Component, Input } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { WatchListService } from '../services/watch-list.service';
@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css'],
})
export class WatchListComponent {
constructor (public watchListService: WatchListService){}

removeFromWatchList(i : number){
  this.watchListService.watchList.splice(i, 1);
}


}
