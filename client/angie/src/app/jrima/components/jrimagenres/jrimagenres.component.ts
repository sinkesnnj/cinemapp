import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Angular2TokenService } from 'angular2-token';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-jrimagenres',
  templateUrl: './jrimagenres.component.html',
  styleUrls: ['./jrimagenres.component.css']
})
export class JrimagenresComponent implements OnInit {
  genres: [];
  page = 1;
  hasNextPage = false;

  constructor(public tokenAuthService: Angular2TokenService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getGenres(this.page);
  }

  getPage(page) {
    this.page = page;
    this.getGenres(this.page);
  }

  getGenres(page) {
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.get('admin/genres?page='+page).subscribe(
      res => {
        if (res.status == 200){
          let genres = res.json().data.genres;
          this.hasNextPage = genres.length > 10;
          this.genres = genres.slice(0, 10);
        }
      }
    );
  }

  deleteGenre(id) {
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.delete('admin/genre/'+id).subscribe(
      res => {
        if (res.status == 200){
          this.getGenres(this.page);
          this.toastr.success('Action successful!', '', {positionClass: 'toast-bottom-right'});
        } else {
          this.toastr.error('Something went wrong', '', {positionClass: 'toast-bottom-right'});
        }
      }
    );
  }

}
