import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { StateService } from 'src/app/core/services/state.service';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  cinemaUser: User;

  constructor(private stateService: StateService, public tokenAuthService: Angular2TokenService) { }

  ngOnInit(): void {
    // this.stateService.initialLoad();
  }

}
