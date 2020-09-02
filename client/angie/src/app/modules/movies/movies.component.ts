import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies = [];
  page = 1;
  hasNextPage = false;

  constructor(public tokenAuthService: Angular2TokenService) { }

  ngOnInit(): void {
    this.getItems(this.page);
  }

  getPage(page) {
    this.page = page;
    this.getItems(this.page);
  }

  getItems(page) {
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.get('movies/index?page='+page).subscribe(
      res => {
        if (res.status == 200){
          let movies = res.json().data.movies;
          this.hasNextPage = movies.length > 4;
          this.movies = movies.slice(0, 4);
        }
      }
    );
  }

}
