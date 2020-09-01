import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jrima-edit-categories',
  templateUrl: './jrima-edit-categories.component.html',
  styleUrls: ['./jrima-edit-categories.component.css']
})
export class JrimaEditCategoriesComponent implements OnInit {
  url = 'admin/categories';
  id = null;
  default_movie = 0;

  fields: FormlyFieldConfig[] = [
    {
      key: 'title',
      type: 'input',
      templateOptions: {
        label: 'Categorie Title',
        placeholder: 'Categorie Title',
        required: true,
      }
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
