import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { query } from '@angular/animations';
import { MovieServiceService } from '../service/movie-service.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
})
export class SearchCriteriaComponent implements OnInit {
  genreList: any;
  constructor(
    private service: MovieServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.service.getGenres().subscribe((res: any) => {
      console.log(res);
      this.genreList = res.genres;
    });
  }

  submitForm(form: NgForm) {
    this.router.navigate(['movie-list'], {
      queryParams: {
        title: form.value.title,
        genre: form.value.genre,
        rating: form.value.rating,
        year: form.value.year,
      },
    });
    console.log(form);
  }
}
