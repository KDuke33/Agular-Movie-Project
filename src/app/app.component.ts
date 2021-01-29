import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieServiceService } from './service/movie-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ang-Movie-Project';
  input: any = ""
  constructor(private movieService: MovieServiceService) {}

  ngOnInit() {
  
 
  }
  // getMovies(){
  //   this.movieService.getMovieYear(this.input).subscribe(res => {
  //     console.log(res)
  //     console.log("worked")
  //   })
  // }
}

