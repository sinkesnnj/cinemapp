import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie_preview.component.html',
  styleUrls: ['./movie_preview.component.css']
})
export class MoviePreviewComponent implements OnInit {
  movie = {
    poster_path: '',
    name: '',
    summary: '',
  };

  constructor(public tokenAuthService: Angular2TokenService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.get('movies/show/'+id).subscribe(
      res => {
        if (res.status == 200){
          this.movie = res.json().data.movie;
        }
      }
    );
  }

}
