import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  movData: any;

  dataGenres = [];
  
  apiKey:string = 'fc7b8d6a3fc62e195f60b003d5b55b5a'

  apiURL: string = 'https://api.themoviedb.org/3/discover/movie?'

  constructor(private http: HttpClient) { }

  setMovData(data:any){
    this.movData
  }
  getmovData(data:any ){
    return this.movData
  }
  getMovies(genre?: any, year?: any, rating?: any): Observable<any> {
    
    let searchParams = {apiKey: this.apiKey, genre: "", primary_release_year: "", ["vote_average.gte"]: ""}
    if(year){
      searchParams.primary_release_year = year
    }
    if(genre){
      searchParams.genre = genre
    }
    if(rating){
      searchParams["vote_average.gte"] = rating
    }
    return this.http.get(this.apiURL, {
      params: searchParams,
    })
  }
  getMovieTitle(title: string){
    return this.http.get("https://api.themoviedb.org/3/search/movie", {
      params: {api_key: this.apiKey, query: title}
    })
  }

  getGenres() {
    return this.http.get("https://api.themoviedb.org/3/genre/movie/list?", {
      params: { api_key: this.apiKey }
    });
  }
  // ${this.apiURL}vote_average.gte=${rating}
}
