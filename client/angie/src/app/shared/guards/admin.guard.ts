import { Injectable }     from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {Angular2TokenService} from "angular2-token";
import { StateService } from 'src/app/core/services/state.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private stateService: StateService,
              private router: Router){}

  canActivate() {
    if(this.stateService.userAdmin()){
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }

}