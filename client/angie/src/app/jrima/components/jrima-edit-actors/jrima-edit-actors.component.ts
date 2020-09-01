import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jrima-edit-actors',
  templateUrl: './jrima-edit-actors.component.html',
  styleUrls: ['./jrima-edit-actors.component.css']
})
export class JrimaEditActorsComponent implements OnInit {
  url = 'admin/actors';
  id = null;
  default_movie = 0;

  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Actor Name',
        placeholder: 'Actor Name',
        required: true,
      }
    },
    {
      key: 'surname',
      type: 'input',
      templateOptions: {
        label: 'Actor Surname',
        placeholder: 'Actor Surname',
        required: true,
      }
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
