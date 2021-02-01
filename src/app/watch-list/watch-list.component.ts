import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'Agular-Movie-Project/src/app/service/movie-service.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css'],
})
export class WatchListComponent implements OnInit {
  movieData: any = [];

  constructor(private service: MovieServiceService) {}

  ngOnInit(): void {
    this.movieData = this.service.getWatchlist();
  }

  removeFromWatchlist(index: any) {
    this.service.removeWatchlist(index);
    this.movieData.splice(index, 1);
  }
}
