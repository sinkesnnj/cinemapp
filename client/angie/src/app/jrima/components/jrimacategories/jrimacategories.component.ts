import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Angular2TokenService } from 'angular2-token';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-jrimacategories',
  templateUrl: './jrimacategories.component.html',
  styleUrls: ['./jrimacategories.component.css']
})
export class JrimacategoriesComponent implements OnInit {
  url = 'admin/categories';
  title = 'Categories';
  headers = ['Categorie Title'];
  objectKeys = ['id', 'title'];

  constructor() { }

  ngOnInit() {
  }

}
