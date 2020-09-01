import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jrima-edit-movie-actors',
  templateUrl: './jrima-edit-movie-actors.component.html',
  styleUrls: ['./jrima-edit-movie-actors.component.css']
})
export class JrimaEditMovieActorsComponent implements OnInit {
  url = 'admin/movie_actors';
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
      key: 'actor_id',
      type: 'input',
      templateOptions: {
        label: 'Actor id',
        placeholder: 'Actor id',
        type: 'number',
        required: true,
      }
    },
    {
      key: 'character_namem',
      type: 'input',
      templateOptions: {
        label: 'Character name',
        placeholder: 'Character name',
        required: true,
      }
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
