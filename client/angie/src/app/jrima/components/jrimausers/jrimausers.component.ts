import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jrimausers',
  templateUrl: './jrimausers.component.html',
  styleUrls: ['./jrimausers.component.css']
})
export class JrimausersComponent implements OnInit {
  url = 'admin/users';
  title = 'Users';
  headers = ['Name', 'Email', 'Last sign in at'];
  objectKeys = ['id', 'name', 'email', 'last_sign_in_at'];

  constructor() { }

  ngOnInit() {
  }

}
