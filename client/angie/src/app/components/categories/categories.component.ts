import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { environment } from 'src/environments/environment';
import { StateService } from 'src/app/core/services/state.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  left_side_categories = [];
  right_side_categories = [];

  constructor(public tokenAuthService: Angular2TokenService, public stateService: StateService) { }

  ngOnInit() {
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.get('news/categories').subscribe(
      res => {
        if (res.status == 200){
          const categories = res.json().data.categories;
          this.left_side_categories = categories.slice(0,3);
          this.right_side_categories = categories.slice(3,6);
        }
      }
    );
  }

  filterNews(event, id){
    event.stopPropagation();
    this.stateService.emitFilter(id);
  }

}
