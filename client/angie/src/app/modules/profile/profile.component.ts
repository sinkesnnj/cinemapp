import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/core/services/state.service';
import { Angular2TokenService } from 'angular2-token';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = {
    id: null,
    name: '',
    nickname: '',
    email: '',
    image: ''
  }

  constructor(public stateService: StateService,
    public tokenAuthService: Angular2TokenService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile(){
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.get('users/my_account').subscribe(
      res => {
        if (res.status == 200){
          this.user = res.json().data.user;
        }
      }
    );
  }

  updateProfile(){
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.put('users/my_account', this.user).subscribe(
      res => {
        if (res.status == 200){
          this.toastr.success('Action successful!', '', {positionClass: 'toast-bottom-right'});
        }
      },
      error => {
        this.toastr.error('Something went wrong', 'Please check submited data', {positionClass: 'toast-bottom-right'});
      }
    );
  }

}
