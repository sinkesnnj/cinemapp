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
  url = 'admin/genres';
  title = 'Genres';
  headers = ['Genre Name'];
  objectKeys = ['id', 'genre_name'];

  constructor() { }

  ngOnInit() {
  }


}
