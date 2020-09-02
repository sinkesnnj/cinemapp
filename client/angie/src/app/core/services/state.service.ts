import { Injectable } from "@angular/core";
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Role } from 'src/app/models/role';
import { environment } from 'src/environments/environment';
import { Angular2TokenService } from 'angular2-token';


@Injectable()
export class StateService {
    public cinemaUser = {} as User;
    public role = {} as Role;
    public search = new Subject<string>();
    public filter = new Subject<number>();

    constructor(public tokenAuthService: Angular2TokenService){}

    emitSearch(val) {
        this.search.next(val);
    }
    
    emitFilter(val) {
        this.filter.next(val);
    } 
    
    userAdmin(): boolean {
        if (this.role.name === null || this.role.name === undefined)
            this.getUserDetails();
        return this.role.name === 'Admin';
    }

    getUserDetails(): void {
        this.tokenAuthService.init(environment.token_auth_config);
        this.tokenAuthService.get('users/my_account').subscribe(
          res => {
            if (res.status == 200){
              this.cinemaUser = new User().deserialize(res.json().data.user);
              this.cinemaUser = this.cinemaUser[0];
              this.role = new Role().deserialize(res.json().data.permission);
              this.role = this.role[0];
            }
          }
        );
      }

}