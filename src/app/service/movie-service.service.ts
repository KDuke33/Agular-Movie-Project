import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  apiKey: string = 'fc7b8d6a3fc62e195f60b003d5b55b5a';

  apiURL: string =
    'https://api.themoviedb.org/3/discover/movie?api_key=fc7b8d6a3fc62e195f60b003d5b55b5a&';

  constructor(private http: HttpClient) {}

  searchMovies(yearInput?: any, rating?: any, genre?: any): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/discover/movie', {
      params: {
        api_key: this.apiKey,
        primary_release_year: yearInput,
        ['vote_average.gte']: rating,
        genre: genre,
      },
    });
  }
  getMovieTitle(title: string) {
    return this.http.get('https://api.themoviedb.org/3/search/movie', {
      params: { api_key: this.apiKey, query: title },
    });
  }
  getPopularMovies(): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/movie/popular', {
      params: { api_key: this.apiKey },
    });
  }
  getGenres() {
    return this.http.get('https://api.themoviedb.org/3/genre/movie/list', {
      params: { api_key: this.apiKey },
    });
  }
}
