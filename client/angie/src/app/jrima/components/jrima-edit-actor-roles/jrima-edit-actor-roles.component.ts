import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jrima-edit-actor-roles',
  templateUrl: './jrima-edit-actor-roles.component.html',
  styleUrls: ['./jrima-edit-actor-roles.component.css']
})
export class JrimaEditActorRolesComponent implements OnInit {
  url = 'admin/actor_roles';
  id = null;
  default_movie = 0;

  fields: FormlyFieldConfig[] = [
    {
      key: 'actor_id',
      type: 'input',
      templateOptions: {
        label: 'Actor Id',
        placeholder: 'Actor Id',
        type: 'number',
        required: true,
      }
    },
    {
      key: 'role_id',
      type: 'input',
      templateOptions: {
        label: 'Role Id',
        placeholder: 'Role Id',
        type: 'number',
        required: true,
      }
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
