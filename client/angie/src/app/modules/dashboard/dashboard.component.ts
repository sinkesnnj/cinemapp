import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { environment } from 'src/environments/environment';
import { StateService } from 'src/app/core/services/state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies = [];
  page = 1;
  hasNextPage = false;

  constructor(public tokenAuthService: Angular2TokenService, public stateService: StateService) { }

  ngOnInit(): void {
    this.getItems(this.page);
  }

  getPage(page) {
    this.page = page;
    this.getItems(this.page);
  }

  getItems(page) {
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.get('movies/dashboard?page='+page).subscribe(
      res => {
        if (res.status == 200){
          let movies = res.json().data.movies;
          this.hasNextPage = movies.length > 6;
          this.movies = movies.slice(0, 6);
        }
      }
    );
  }

}
