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
    });
  }

  setFav(movie: any): void | any[] {
    let foundMovie = this.favList.find((item) => item.id === movie.id);
    console.log('something happened');
    if (!foundMovie) {
      let newFav: Movie = {
        id: movie.id,
        title: movie.title,
        description: movie.overview,
        year: movie.release_date,
        rating: movie.vote_average,
        imagePath: movie.poster_path,
      };
      this.favList.push(newFav);
      console.log('new movie');
    } else {
      console.log(this.favList);
    }
  }
  showInfo(i: number) {
    this.showPopup = i;
  }
}
