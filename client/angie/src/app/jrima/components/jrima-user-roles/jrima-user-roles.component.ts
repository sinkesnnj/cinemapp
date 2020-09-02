import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jrima-user-roles',
  templateUrl: './jrima-user-roles.component.html',
  styleUrls: ['./jrima-user-roles.component.css']
})
export class JrimaUserRolesComponent implements OnInit {

  url = 'admin/user_roles';
  title = 'User Roles';
  headers = ['Actor Name', 'Role Name'];
  objectKeys = ['id', 'user_name', 'role_name'];

  constructor() { }

  ngOnInit() {
  }

}
