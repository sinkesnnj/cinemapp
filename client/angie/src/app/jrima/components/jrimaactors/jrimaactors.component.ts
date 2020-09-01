import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-jrimaactors',
  templateUrl: './jrimaactors.component.html',
  styleUrls: ['./jrimaactors.component.css']
})
export class JrimaactorsComponent implements OnInit {
  actors: [];
  page = 1;
  hasNextPage = false;

  constructor(public tokenAuthService: Angular2TokenService) { }

  ngOnInit() {
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.get('admin/actors?page='+this.page).subscribe(
      res => {
        if (res.status == 200){
          let actors = res.json().data.actors;
          this.hasNextPage = actors.length > 10;
          this.actors = actors.slice(0, 10);
        }
      }
    );
  }

}
