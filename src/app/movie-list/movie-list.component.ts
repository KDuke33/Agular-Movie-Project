import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../model/movie';
import { MovieServiceService } from '../service/movie-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movieData: any;
  showPopup: any = 21;
  favList: any[] = [];

  @Input() data: any;
  
  // lets the parent know about the event
  @Output() added = new EventEmitter<any>();
  showInfo: any;

  constructor(
    private service: MovieServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      if (params) {
        if (params.title) {
          this.service
            .getMovieTitle(params.title)
            .subscribe((response: any) => {
              this.movieData = response.results;
              console.log(this.movieData);
            });
        } else {
          this.service.getMovies(params).subscribe((data) => {
            this.movieData = data.results;
          });
        }
      } else {
        //popular movies or some other hard coded data to populate before searching
      }
    });
  }

  addToWatchlist(movie: any) {
    this.service.addToWatchlist(movie);
    movie.isClicked = true;

    this.added.emit(movie);
  }

  ShowInfo(index: any) {
    this.showInfo = index;
  }

  removeShowInfo() {
    this.showInfo = null;
  }
}
