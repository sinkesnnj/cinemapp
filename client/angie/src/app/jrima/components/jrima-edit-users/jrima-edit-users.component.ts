import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jrima-edit-users',
  templateUrl: './jrima-edit-users.component.html',
  styleUrls: ['./jrima-edit-users.component.css']
})
export class JrimaEditUsersComponent implements OnInit {
  url = 'admin/users';
  id = null;
  default_movie = 0;

  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'Name',
        required: true,
      }
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email',
        placeholder: 'Email',
        required: true,
      }
    },
    {
      key: 'nickname',
      type: 'input',
      templateOptions: {
        label: 'Nickname',
        placeholder: 'Nickname',
        required: false,
      }
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
