import { Component } from '@angular/core';
import { WatchListService } from '../services/watch-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public watchListService: WatchListService) {}
}
