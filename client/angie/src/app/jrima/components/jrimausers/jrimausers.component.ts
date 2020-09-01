import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jrimausers',
  templateUrl: './jrimausers.component.html',
  styleUrls: ['./jrimausers.component.css']
})
export class JrimausersComponent implements OnInit {
  url = 'admin/users';
  title = 'Users';
  headers = ['Name', 'Email', 'Nickname'];
  objectKeys = ['id', 'name', 'email', 'nickname'];

  constructor() { }

  ngOnInit() {
  }

}
