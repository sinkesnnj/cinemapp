import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-jrimamovie',
  templateUrl: './jrimamovie.component.html',
  styleUrls: ['./jrimamovie.component.css']
})
export class JrimamovieComponent implements OnInit {
  movies: [];
  page = 1;
  hasNextPage = false;

  constructor(public tokenAuthService: Angular2TokenService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getMovies(this.page);
  }

  getPage(page) {
    this.page = page;
    this.getMovies(this.page);
  }

  getMovies(page) {
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.get('admin/movies?page='+page).subscribe(
      res => {
        if (res.status == 200){
          let movies = res.json().data.movies;
          this.hasNextPage = movies.length > 10;
          this.movies = movies.slice(0, 10);
        }
      }
    );
  }

  deleteMovie(id) {
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.delete('admin/movie/'+id).subscribe(
      res => {
        if (res.status == 200){
          this.getMovies(this.page);
          this.toastr.success('Action successful!', '', {positionClass: 'toast-bottom-right'});
        } else {
          this.toastr.error('Something went wrong', '', {positionClass: 'toast-bottom-right'});
        }
      }
    );
  }

}
