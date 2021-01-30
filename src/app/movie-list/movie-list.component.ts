import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieServiceService } from '../service/movie-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
movieData: any; 
input: any;
// showPopup: any = 21
  constructor(private service: MovieServiceService) { }

  ngOnInit(): void {
    // getMovieByTitle(form: NgForm){  
    //   this.service.getMovieTitle(form.value.title).subscribe((res: any) => {
    //     this.movieData = res.results
    //     console.log(this.movieData)
    //   })
    // }
  }

// showInfo(i: number){
//   this.showPopup = i
// }
  // submitForm(form: NgForm){
  //   console.log(form)
  //   this.service.getMovieYear(Number(form.value.year)).subscribe(response => {
  //     this.movieData = response
  //     console.log(this.movieData)
  //   })
  // }

}
