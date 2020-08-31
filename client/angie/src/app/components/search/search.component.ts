import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/core/services/state.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search = '';

  constructor(public stateService: StateService) { }

  ngOnInit() {
  }

  emit() { // your value you want to emit
    this.stateService.emitSearch(this.search);
  }
}
