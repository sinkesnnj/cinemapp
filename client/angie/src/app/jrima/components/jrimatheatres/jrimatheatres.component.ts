import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jrimatheatres',
  templateUrl: './jrimatheatres.component.html',
  styleUrls: ['./jrimatheatres.component.css']
})
export class JrimatheatresComponent implements OnInit {

  url = 'admin/theatres';
  title = 'Theatres';
  headers = ['Name', 'Seating Capacity'];
  objectKeys = ['id', 'name', 'seating_capacity'];

  constructor() { }

  ngOnInit() {
  }

}
