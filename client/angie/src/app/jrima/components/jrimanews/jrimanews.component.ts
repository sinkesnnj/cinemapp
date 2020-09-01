import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Angular2TokenService } from 'angular2-token';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-jrimanews',
  templateUrl: './jrimanews.component.html',
  styleUrls: ['./jrimanews.component.css']
})
export class JrimanewsComponent implements OnInit {
  url = 'admin/news';
  title = "News";
  headers = ['Title', 'Release Date', 'Description'];
  objectKeys = ['id', 'title', 'release_date', 'short_description'];

  constructor() { }

  ngOnInit() {
  }

}
