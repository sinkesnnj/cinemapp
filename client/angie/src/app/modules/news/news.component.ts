import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news = [];

  constructor(
    public tokenAuthService: Angular2TokenService
  ) { }

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

}
