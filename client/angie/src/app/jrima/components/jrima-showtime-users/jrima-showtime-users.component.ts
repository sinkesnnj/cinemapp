import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jrima-showtime-users',
  templateUrl: './jrima-showtime-users.component.html',
  styleUrls: ['./jrima-showtime-users.component.css']
})
export class JrimaShowtimeUsersComponent implements OnInit {

  url = 'admin/showtime_users';
  title = 'Showtime Users';
  headers = ['Movie Name', 'Theatre Name', 'User email', 'Row Number', 'Seat Number'];
  objectKeys = ['id', 'movie_name', 'theatre_name', 'user_email', 'row_number', 'seat_number'];

  constructor() { }

  ngOnInit() {
  }

}
