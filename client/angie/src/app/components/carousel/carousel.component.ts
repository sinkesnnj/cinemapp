import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  carousels = [];

  constructor(public tokenAuthService: Angular2TokenService) { }

  ngOnInit() {
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.get('news/carousel').subscribe(
      res => {
        if (res.status == 200){
          this.carousels = res.json().data.news;
        }
      }
    );
  } 

}
