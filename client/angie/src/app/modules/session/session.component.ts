import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/core/services/state.service';
import { Angular2TokenService } from 'angular2-token';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };
  

  constructor(
    private router: Router,
    public stateService: StateService,
    public tokenAuthService: Angular2TokenService
   ){ }

  ngOnInit(): void { }

  signIn(): void {
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.signIn(this.user).subscribe(
      res => {
        if (res.status == 200){
          this.stateService.cinemaUser = res.json()._body;
          this.router.navigate(['/dashboard']);
        }
      }
    );
  }

}
