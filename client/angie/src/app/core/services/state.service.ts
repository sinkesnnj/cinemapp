import { Injectable } from "@angular/core";
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class StateService {
    public cinemaUser = {} as User;

    constructor(private http: HttpClient){}

    initialLoad(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get<any>('http://127.0.0.1:3000/users/my_account.json')
            .subscribe(res => {
                debugger;
            });
        });
    }
}