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
  categories: [];
  page = 1;
  hasNextPage = false;

  constructor(public tokenAuthService: Angular2TokenService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getCategories(this.page);
  }

  getPage(page) {
    this.page = page;
    this.getCategories(this.page);
  }

  getCategories(page) {
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.get('admin/categories?page='+page).subscribe(
      res => {
        if (res.status == 200){
          let categories = res.json().data.categories;
          this.hasNextPage = categories.length > 10;
          this.categories = categories.slice(0, 10);
        }
      }
    );
  }

  deleteCategorie(id) {
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.delete('admin/categorie/'+id).subscribe(
      res => {
        if (res.status == 200){
          this.getCategories(this.page);
          this.toastr.success('Action successful!', '', {positionClass: 'toast-bottom-right'});
        } else {
          this.toastr.error('Something went wrong', '', {positionClass: 'toast-bottom-right'});
        }
      }
    );
  }

}
