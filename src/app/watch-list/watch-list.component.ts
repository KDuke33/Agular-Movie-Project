import { MovieServiceService } from './../service/movie-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {
  watch: any[] = [];
  watchIds: number[] = [];

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

}
