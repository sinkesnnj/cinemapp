import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jrima-edit-roles',
  templateUrl: './jrima-edit-roles.component.html',
  styleUrls: ['./jrima-edit-roles.component.css']
})
export class JrimaEditRolesComponent implements OnInit {

  url = 'admin/roles';
  id = null;
  default_movie = 0;

  fields: FormlyFieldConfig[] = [
    {
      key: 'role_type',
      type: 'input',
      templateOptions: {
        label: 'Role Type',
        placeholder: 'Role Type',
        required: true,
      }
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
