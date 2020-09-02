import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jrima-roles',
  templateUrl: './jrima-roles.component.html',
  styleUrls: ['./jrima-roles.component.css']
})
export class JrimaRolesComponent implements OnInit {

  url = 'admin/roles';
  title = 'Roles';
  headers = ['Role Type'];
  objectKeys = ['id', 'name'];

  constructor() { }

  ngOnInit() {
  }

}
