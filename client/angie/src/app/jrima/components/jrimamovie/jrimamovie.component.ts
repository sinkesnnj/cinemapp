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
  url = 'admin/movies';
  title = 'Movies';
  headers = ['Movie Name', 'Release Date', 'Run Time', 'Rating'];
  objectKeys = ['id', 'name', 'release_date', 'run_time', 'rating'];

  constructor() { }

  ngOnInit() {
  }

}
