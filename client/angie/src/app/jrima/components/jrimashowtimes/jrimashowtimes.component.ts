import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jrimashowtimes',
  templateUrl: './jrimashowtimes.component.html',
  styleUrls: ['./jrimashowtimes.component.css']
})
export class JrimashowtimesComponent implements OnInit {

  url = 'admin/showtimes';
  title = 'Showtimes';
  headers = ['Movie Name', 'Theatre Name', 'Projection Date', 'Projection Time'];
  objectKeys = ['id', 'movie_name', 'theatre_name', 'projection_date', 'projection_time'];

  constructor() { }

  ngOnInit() {
  }

}
