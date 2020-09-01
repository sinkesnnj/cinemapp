import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-jrimaactors',
  templateUrl: './jrimaactors.component.html',
  styleUrls: ['./jrimaactors.component.css']
})
export class JrimaactorsComponent implements OnInit {
  url = 'admin/actors';
  title = 'Actors';
  headers = ['Actor Name', 'Actor Surname'];
  objectKeys = ['id', 'name', 'surname'];

  constructor() { }

  ngOnInit() {
  }

}
