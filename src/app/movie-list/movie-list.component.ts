import { Component, OnInit } from '@angular/core';
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
  watch: any[] = [];
  watchIds: any[] = [];
  constructor(
    private service: MovieServiceService,
    private router: Router,
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

      this.watchIds = this.service.getIds();
      this.watch = this.service.getWatch();
    });
  }
  showInfo(i: number) {
    this.showPopup = i;
  }
  toggleWatch(watch: any) {
    if (this.watchIds.includes(watch.id)) {
      let index = this.watchIds.findIndex(add => {
        return add === watch.id;
      });
      this.watchIds.splice(index, 1);
      this.watch.splice(index, 1);
      this.service.setWatch(this.watch);
      this.service.setIds(this.watchIds);
    } else {
      this.watchIds.push(watch.id);
      this.watch.push(watch);
      this.service.setWatch(this.watch);
      this.service.setIds(this.watchIds);
    }
  }
  checkWatch(movie: any) {
    return this.watchIds.includes(movie.id);
  }

  }


