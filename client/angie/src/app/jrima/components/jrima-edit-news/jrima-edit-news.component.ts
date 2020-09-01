import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-jrima-edit-news',
  templateUrl: './jrima-edit-news.component.html',
  styleUrls: ['./jrima-edit-news.component.css']
})
export class JrimaEditNewsComponent implements OnInit {
  url = 'admin/news';
  id = null;
  default_movie = 0;

  fields: FormlyFieldConfig[] = [
    {
      key: 'title',
      type: 'input',
      templateOptions: {
        label: 'News Title',
        placeholder: 'News Title',
        required: true,
      }
    },
    {
      key: 'short_description',
      type: 'input',
      templateOptions: {
        label: 'Short Description',
        placeholder: 'Short Description',
        required: true,
      }
    },
    {
      key: 'story_text',
      type: 'textarea',
      templateOptions: {
        label: 'Story Text',
        placeholder: 'Story Text',
        required: true,
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
      key: 'poster_path',
      type: 'input',
      templateOptions: {
        label: 'Poster Path',
        placeholder: 'Poster Path',
        required: false,
      }
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
