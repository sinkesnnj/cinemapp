import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-theatres',
  templateUrl: './theatres.component.html',
  styleUrls: ['./theatres.component.css']
})
export class TheatresComponent implements OnInit {
  theatres = [];

  constructor(public tokenAuthService: Angular2TokenService) { }

  ngOnInit(): void {
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.get('theatres/index').subscribe(
      res => {
        if (res.status == 200){
          this.theatres = res.json().data.theatres;
        }
      }
    );
  }

}
