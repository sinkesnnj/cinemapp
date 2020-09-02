import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jrima-edit-user-roles',
  templateUrl: './jrima-edit-user-roles.component.html',
  styleUrls: ['./jrima-edit-user-roles.component.css']
})
export class JrimaEditUserRolesComponent implements OnInit {
  url = 'admin/user_roles';
  id = null;
  default_movie = 0;

  fields: FormlyFieldConfig[] = [
    {
      key: 'user_id',
      type: 'input',
      templateOptions: {
        label: 'User Id',
        placeholder: 'User Id',
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
