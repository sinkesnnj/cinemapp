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
  search = null;
  filter = null;
  page = 1;
  hasNextPage = false;

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
    this.getItems(this.page);
  }

  getPage(page) {
    this.page = page;
    if (this.search !== null && this.search !== undefined && this.search !== '')
      this.startSearch();
    else if (this.filter !== null && this.filter !== undefined && this.filter !== '')
      this.startFilter();
    else
      this.getItems(this.page);
  }

  getItems(page) {
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.get('news/index?page='+page).subscribe(
      res => {
        if (res.status == 200){
          let news = res.json().data.news;
          this.hasNextPage = news.length > 3;
          this.news = news.slice(0, 3);
        }
      }
    );
  }

  startSearch(): void {
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.get('news/index?page='+this.page+'&search='+this.search).subscribe(
      res => {
        if (res.status == 200){
          let news = res.json().data.news;
          this.hasNextPage = news.length > 3;
          this.news = news.slice(0, 3);
        }
      }
    );
  }

  startFilter(): void {
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.get('news/index?page='+this.page+'&filter='+this.filter).subscribe(
      res => {
        if (res.status == 200){
          let news = res.json().data.news;
          this.hasNextPage = news.length > 3;
          this.news = news.slice(0, 3);
        }
      }
    );
  }

}
