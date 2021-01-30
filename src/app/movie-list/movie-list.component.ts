import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../service/movie-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
movieData: any; 
input: any;
showPopup: any = 21

  constructor(private service: MovieServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //pulls in queryParams object sent from search criteria
    this.route.queryParams.subscribe(params => {
      console.log(params);
      if (params.title) {
        console.log("hit title")
        this.service.getMovieTitle(params.title).subscribe(response => {
          console.log(response)
          this.movieData = response.results
        })
      }else if(params.year | params.genre | params.rating){
        console.log("hit other endpoint")
        this.service.getMovies(params.genre, params.year, params.rating).subscribe(response =>{
          this.movieData = response.results
        })
       }else{
      //   //add another get method to pull whatever we want to populate by default. Either popular movies or movies rated 10. If we do popular movies, need another API
      }
    })
    }
  

showInfo(i: number){
  this.showPopup = i
}

}