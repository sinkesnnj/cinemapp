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
    run_time: 0,
    rating: 0
  };
  actors = [];
  genres = [];

  constructor(public tokenAuthService: Angular2TokenService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.get('movies/show/'+id).subscribe(
      res => {
        if (res.status == 200){
          this.movie = res.json().data.movie;
          this.actors = res.json().data.actors;
          this.genres = res.json().data.genre;
        }
      }
    );
  }

  formatActors(): string{
    let actors = this.actors.map(actor => ' ' + actor.name + ' ' + actor.surname);
    if (actors.length < 1)
      return 'N/A';

    return actors.join(',');
  }

  formatGenre(): string{
    let genres = this.genres.map(genre => ' ' + genre.genre_name);
    if (genres.length < 1)
      return 'N/A';

    return genres.join(',');
  }

}
