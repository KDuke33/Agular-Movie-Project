import { MovieServiceService } from './../service/movie-service.service';
import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'Agular-Movie-Project/src/app/service/movie-service.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css'],
})
export class WatchListComponent implements OnInit {
  watch: any[] = [];
  watchIds: number[] = [];
  showInfo: any;

  constructor(private service: MovieServiceService) { }

  ngOnInit(): void {

    this.watch = this.service.getWatch();
    this.watchIds = this.service.getIds();
  }

  removeWatch(index: number) {
    this.watch.splice(index, 1);
    this.watchIds.splice(index, 1);
    this.service.setWatch(this.watch);
    this.service.setIds(this.watchIds);
  }

  ShowInfo(index: any) {
    this.showInfo = index;
  }

  removeShowInfo() {
    this.showInfo = null;
  }

  // removeFromWatchlist(index: any) {
  //   this.service.removeWatchlist(index);
  //   this.movieData.splice(index, 1);
  // }
}
