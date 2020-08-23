import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  news = {
    title: '',
    updated_at: '',
    poster_path: '',
    story_text: '',
    release_date: '',
    short_description: ''
  }

  constructor(public tokenAuthService: Angular2TokenService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.get('news/show/'+id).subscribe(
      res => {
        if (res.status == 200){
          this.news = res.json().data.news;
        }
      }
    );
  }

}
