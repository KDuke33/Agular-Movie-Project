import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieServiceService } from '../service/movie-service.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  @Input()movieData: any; 
  input: any;
  showPopup: any = 21
  // showPopup: any = 21
    constructor(private service: MovieServiceService) { }
  
    ngOnInit(): void {
      // this.service.getMovieYear(2000, 8).subscribe((data: any) => {
      //   // console.log(data.results)
      //   this.movieData = data.results
      // })
    }
    showInfo(i: number){
      this.showPopup = i
    }
    
  
  getMovieByTitle(form: NgForm){  
    this.service.getMovieTitle(form.value.title).subscribe((res: any) => {
      this.movieData = res.results
      console.log(this.movieData)
    })
  }
  

  submitForm(form: NgForm){
    // console.log(form)
    this.service.getMovieYear((form.value.year, form.value.genre, form.value.rating)).subscribe(response => {
      this.movieData = response
      console.log(this.movieData)
    })
  }
}
