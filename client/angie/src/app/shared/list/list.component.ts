import { Component, OnInit, Input } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() url: string;
  @Input() title: string;
  @Input() headers: Array<string>;
  @Input() objectKeys: Array<string>;
  @Input() dateFormats: any;
  items: [];
  page = 1;
  hasNextPage = false;

  constructor(public tokenAuthService: Angular2TokenService, private toastr: ToastrService, public router: Router) { }

  ngOnInit() {
    this.getItems(this.page);
  }

  getPage(page) {
    this.page = page;
    this.getItems(this.page);
  }

  getItems(page) {
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.get(this.url + '?page='+page).subscribe(
      res => {
        if (res.status == 200){
          let items = res.json().data.items;
          this.hasNextPage = items.length > 10;
          this.items = items.slice(0, 10);
        }
      }
    );
  }

  deleteItem(id) {
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.delete(this.url + '/' + id).subscribe(
      res => {
        if (res.status == 200){
          this.getItems(this.page);
          this.toastr.success('Action successful!', '', {positionClass: 'toast-bottom-right'});
        }
      },
      error => {
        this.toastr.error('Something went wrong', '', {positionClass: 'toast-bottom-right'});
      }
    );
  }

  editItem(id){
    this.router.navigate([this.url + '/' + id]);
  }

}
