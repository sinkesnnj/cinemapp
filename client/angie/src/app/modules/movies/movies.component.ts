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

  constructor(public tokenAuthService: Angular2TokenService) { }

  ngOnInit(): void {
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.get('movies/index').subscribe(
      res => {
        if (res.status == 200){
          this.movies = res.json().data.movies;
        }
      }
    );
  }

}
