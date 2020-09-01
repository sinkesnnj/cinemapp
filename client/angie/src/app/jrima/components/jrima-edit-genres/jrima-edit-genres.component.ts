import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-jrima-edit-genres',
  templateUrl: './jrima-edit-genres.component.html',
  styleUrls: ['./jrima-edit-genres.component.css']
})
export class JrimaEditGenresComponent implements OnInit {
  url = 'admin/genres';
  id = null;
  default_movie = 0;

  fields: FormlyFieldConfig[] = [
    {
      key: 'genre_name',
      type: 'input',
      templateOptions: {
        label: 'Genre Name',
        placeholder: 'Genre Name',
        required: true,
      }
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
