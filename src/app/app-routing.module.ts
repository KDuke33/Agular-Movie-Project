import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { WatchListComponent } from './watch-list/watch-list.component';

const routes: Routes = [
  { path: "search-criteria", component: SearchCriteriaComponent },
  { path: "movie-list", component: MovieListComponent },
  { path: "watch-list", component: WatchListComponent },
  { path: "", redirectTo: "/search-criteria", pathMatch: "full" },
  { path: "**", component: SearchCriteriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
