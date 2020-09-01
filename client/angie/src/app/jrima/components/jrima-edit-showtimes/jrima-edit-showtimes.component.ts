import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jrima-edit-showtimes',
  templateUrl: './jrima-edit-showtimes.component.html',
  styleUrls: ['./jrima-edit-showtimes.component.css']
})
export class JrimaEditShowtimesComponent implements OnInit {

  url = 'admin/showtimes';
  id = null;
  default_movie = 0;

  fields: FormlyFieldConfig[] = [
    {
      key: 'movie_id',
      type: 'input',
      templateOptions: {
        label: 'Movie Id',
        placeholder: 'Movie Id',
        type: 'number',
        required: true,
      }
    },
    {
      key: 'theatre_id',
      type: 'input',
      templateOptions: {
        label: 'Theatre Id',
        placeholder: 'Theatre Id',
        type: 'number',
        required: true,
      }
    },
    {
      key: 'projection_date',
      type: 'input',
      templateOptions: {
        label: 'Projection Date',
        placeholder: 'Projection Date',
        type: 'date',
        required: true,
      }
    },
    {
      key: 'projection_time',
      type: 'input',
      templateOptions: {
        label: 'Projection Time',
        placeholder: 'Projection Time',
        type: 'time',
        required: true,
      }
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
