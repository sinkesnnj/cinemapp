import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { environment } from 'src/environments/environment';
import { StateService } from 'src/app/core/services/state.service';
import { RequestOptions } from '@angular/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news = [];
  search = '';
  filter = null;

  constructor(public tokenAuthService: Angular2TokenService, public stateService: StateService) {
    this.stateService.search.subscribe(value => {
      this.search = value;
      this.startSearch();
    });

    this.stateService.filter.subscribe(value => {
      this.filter = value;
      this.startFilter();
    });
  }

  ngOnInit(): void {
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.get('news/index').subscribe(
      res => {
        if (res.status == 200){
          this.news = res.json().data.news;
        }
      }
    );
  }

  startSearch(): void {
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.get('news/index?search='+this.search).subscribe(
      res => {
        if (res.status == 200){
          this.news = res.json().data.news;
        }
      }
    );
  }

  startFilter(): void {
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.get('news/index?filter='+this.filter).subscribe(
      res => {
        if (res.status == 200){
          this.news = res.json().data.news;
        }
      }
    );
  }

}
