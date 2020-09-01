import { Component, OnInit, Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { Router } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() url: string;
  @Input() id: string;
  @Input() fields: FormlyFieldConfig[];
  form = new FormGroup({});
  model = {
    id: null
  };

  constructor(public router: Router, public tokenAuthService: Angular2TokenService, private toastr: ToastrService) { 
    
  }

  ngOnInit() {
    if (this.id !== null && this.id !== undefined)
      this.loadData();
  }

  loadData(){
    this.tokenAuthService.get(this.url + '/' + this.id).subscribe(
      res => {
        if (res.status == 200){
          this.model = res.json().data.model;
        }
      }
    );
  }

  onSubmit() {
    if (this.model.id === null) {
      this.createObject();
    } else {
      this.updateObject();
    }
  }

  onCancel(){
    this.router.navigate([this.url]);
  }

  createObject(){
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.post(this.url + '/create', this.model).subscribe(
      res => {
        if (res.status == 200){
          this.toastr.success('Action successful!', '', {positionClass: 'toast-bottom-right'});
        }
      },
      error => {
        this.toastr.error('Something went wrong', 'Please check submited data', {positionClass: 'toast-bottom-right'});
      }
    );
  }

  updateObject(){
    this.tokenAuthService.init(environment.token_auth_config);
    this.tokenAuthService.put(this.url + '/' + this.model.id, this.model).subscribe(
      res => {
        if (res.status == 200){
          this.toastr.success('Action successful!', '', {positionClass: 'toast-bottom-right'});
        }
      },
      error => {
        this.toastr.error('Something went wrong', 'Please check submited data', {positionClass: 'toast-bottom-right'});
      }
    );
  }
}
