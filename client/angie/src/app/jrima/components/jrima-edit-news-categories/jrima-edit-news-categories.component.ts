import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jrima-edit-news-categories',
  templateUrl: './jrima-edit-news-categories.component.html',
  styleUrls: ['./jrima-edit-news-categories.component.css']
})
export class JrimaEditNewsCategoriesComponent implements OnInit {
  url = 'admin/news_categories';
  id = null;
  default_movie = 0;

  fields: FormlyFieldConfig[] = [
    {
      key: 'news_id',
      type: 'input',
      templateOptions: {
        label: 'News id',
        placeholder: 'News id',
        type: 'number',
        required: true,
      }
    },
    {
      key: 'categorie_id',
      type: 'input',
      templateOptions: {
        label: 'Categorie id',
        placeholder: 'Categorie id',
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
