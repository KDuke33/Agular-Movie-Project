import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  movData: any;

  dataGenres = [];
  
  apiKey:string = 'fc7b8d6a3fc62e195f60b003d5b55b5a'


  apiURL: string = 'https://api.themoviedb.org/3/discover/movie?';

  watchlist: any = [];

  constructor(private http: HttpClient) {}

  

  getMovies(queryParams: any): Observable<any> {
    let parameters: any = {
      api_key: this.apiKey,
    };
    if (queryParams.year) {
      parameters.year = queryParams.year;
    }
    if (queryParams.rating) {
      parameters['vote_average.gte'] = queryParams.rating;
    }
    if (queryParams.genre) {
      parameters.with_genres = queryParams.genre;
    }
    return this.http.get('https://api.themoviedb.org/3/discover/movie?', {
      params: parameters,
    });
  }
  getMovieTitle(title: string) {
    return this.http.get('https://api.themoviedb.org/3/search/movie?', {
      params: { api_key: this.apiKey, query: title },
    });
  }

  getGenres() {
    return this.http.get('https://api.themoviedb.org/3/genre/movie/list?', {
      params: { api_key: this.apiKey },
    });
  }

  addToWatchlist(movie: any) {
    this.watchlist.push(movie);
    console.log(this.watchlist);
  }

  removeWatchlist(index: any) {
    this.watchlist.splice(index, 1);
  }

  }


  
  


