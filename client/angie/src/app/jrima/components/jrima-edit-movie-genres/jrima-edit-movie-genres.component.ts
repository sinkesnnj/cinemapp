import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jrima-edit-movie-genres',
  templateUrl: './jrima-edit-movie-genres.component.html',
  styleUrls: ['./jrima-edit-movie-genres.component.css']
})
export class JrimaEditMovieGenresComponent implements OnInit {
  url = 'admin/movie_genres';
  id = null;
  default_movie = 0;

  fields: FormlyFieldConfig[] = [
    {
      key: 'movie_id',
      type: 'input',
      templateOptions: {
        label: 'Movie id',
        placeholder: 'Movie id',
        type: 'number',
        required: true,
      }
    },
    {
      key: 'genre_id',
      type: 'input',
      templateOptions: {
        label: 'Genre id',
        placeholder: 'Genre id',
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
