import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies = [];

  constructor(public tokenAuthService: Angular2TokenService) { }

  ngOnInit(): void {
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.get('movies/dashboard').subscribe(
      res => {
        if (res.status == 200){
          this.movies = res.json().data.movies;
        }
      }
    );
  }

}
