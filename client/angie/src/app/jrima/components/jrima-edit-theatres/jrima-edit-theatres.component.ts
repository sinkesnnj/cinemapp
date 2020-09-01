import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jrima-edit-theatres',
  templateUrl: './jrima-edit-theatres.component.html',
  styleUrls: ['./jrima-edit-theatres.component.css']
})
export class JrimaEditTheatresComponent implements OnInit {

  url = 'admin/theatres';
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
      key: 'seating_capacity',
      type: 'input',
      templateOptions: {
        label: 'Seating Capacity',
        placeholder: 'Seating Capasitiy',
        type: 'number',
        required: true,
      }
    },
    {
      key: 'image_path',
      type: 'input',
      templateOptions: {
        label: 'Image Path',
        placeholder: 'Image Path',
        required: false,
      }
    },
    {
      key: 'description',
      type: 'textarea',
      templateOptions: {
        label: 'Description',
        placeholder: 'Description',
        required: false,
      }
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
