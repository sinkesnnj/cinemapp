import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/core/services/state.service';
import { Angular2TokenService } from 'angular2-token';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
@Injectable()
export class SessionComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };
  

  constructor(
    private router: Router,
    public stateService: StateService,
    public tokenAuthService: Angular2TokenService,
    private toastr: ToastrService
   ){ }

  ngOnInit(): void { }

  signIn(): void {
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.signIn(this.user).subscribe(
      res => {
        if (res.status == 200){
          this.getUserDetails();
        } else {
          this.toastr.error('User/password combination doesn\'t exist', '', {positionClass: 'toast-bottom-right'});
        }
      },
      error => {
        this.toastr.error('User/password combination doesn\'t exist', '', {positionClass: 'toast-bottom-right'});
      }
    );
  }

  getUserDetails(): void {
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.get('users/my_account').subscribe(
      res => {
        if (res.status == 200){
          this.stateService.cinemaUser = new User().deserialize(res.json().data.user);
          this.stateService.cinemaUser = this.stateService.cinemaUser[0];
          this.stateService.role = new Role().deserialize(res.json().data.role);
          this.stateService.role = this.stateService.role[0];
          this.toastr.success('Successfully loged in!', '', {positionClass: 'toast-bottom-right'});
          this.router.navigate(['/dashboard']);
        } else {
          this.toastr.error('User/password combination doesn\'t exist', '', {positionClass: 'toast-bottom-right'});
        }
      },
      error => {
        this.toastr.error('User/password combination doesn\'t exist', '', {positionClass: 'toast-bottom-right'});
      }
    );
  }

}
