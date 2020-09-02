import { Injectable } from "@angular/core";
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Role } from 'src/app/models/role';


@Injectable()
export class StateService {
    public cinemaUser = {} as User;
    public role = {} as Role;
    public search = new Subject<string>();
    public filter = new Subject<number>();

    constructor(private http: HttpClient){}

    emitSearch(val) {
        this.search.next(val);
    }
    
    emitFilter(val) {
        this.filter.next(val);
    } 
    
    userAdmin(): boolean {
        return this.role.name === 'Admin';
    }

}