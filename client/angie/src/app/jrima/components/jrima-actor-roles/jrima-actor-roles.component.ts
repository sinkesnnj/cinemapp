import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jrima-actor-roles',
  templateUrl: './jrima-actor-roles.component.html',
  styleUrls: ['./jrima-actor-roles.component.css']
})
export class JrimaActorRolesComponent implements OnInit {

  url = 'admin/actor_roles';
  title = 'Actor Roles';
  headers = ['Actor Name', 'Role Type'];
  objectKeys = ['id', 'actor_name', 'role_type'];

  constructor() { }

  ngOnInit() {
  }

}
