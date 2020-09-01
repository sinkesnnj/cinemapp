import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jrima-edit-movies',
  templateUrl: './jrima-edit-movies.component.html',
  styleUrls: ['./jrima-edit-movies.component.css']
})
export class JrimaEditMoviesComponent implements OnInit {
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Movie name',
        placeholder: 'Movie name',
        required: true,
      }
    },
    {
      key: 'summary',
      type: 'textarea',
      templateOptions: {
        label: 'Movie summary',
        placeholder: 'Movie summary',
        required: false,
      }
    },
    {
      key: 'release_date',
      type: 'input',
      templateOptions: {
        label: 'Release Date',
        placeholder: 'Release Date',
        type: 'date',
        required: false,
      },
    },
    {
      key: 'run_time',
      type: 'input',
      templateOptions: {
        label: 'Run time (minutes)',
        placeholder: 'Run time',
        pattern: /(\d{1,3})/,
        required: false,
      },
      validation: {
        messages: {
          pattern: (error, field: FormlyFieldConfig) => `"${field.formControl.value}" is not a valid run time, please specify time in minutes!`,
        },
      },
    },
    {
      key: 'poster_path',
      type: 'input',
      templateOptions: {
        label: 'Poster path (url)',
        placeholder: 'Poster path',
        required: false,
      }
    },
    {
      key: 'rating',
      type: 'input',
      templateOptions: {
        label: 'Rating',
        placeholder: 'Rating',
        pattern: /([12345]{1})/,
        required: false,
      },
      validation: {
        messages: {
          pattern: (error, field: FormlyFieldConfig) => `"${field.formControl.value}" is not a valid rating, please specifie something between 1 and 5`,
        },
      },
    }
  ];
  url = 'admin/movies';
  id = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
