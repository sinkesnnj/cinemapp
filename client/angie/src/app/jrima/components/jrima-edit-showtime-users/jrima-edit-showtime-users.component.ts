import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jrima-edit-showtime-users',
  templateUrl: './jrima-edit-showtime-users.component.html',
  styleUrls: ['./jrima-edit-showtime-users.component.css']
})
export class JrimaEditShowtimeUsersComponent implements OnInit {

  url = 'admin/showtime_users';
  id = null;
  default_movie = 0;

  fields: FormlyFieldConfig[] = [
    {
      key: 'showtime_id',
      type: 'input',
      templateOptions: {
        label: 'Showtime Id',
        type: 'number',
        placeholder: 'Showtime Id',
        required: true,
      }
    },
    {
      key: 'user_id',
      type: 'input',
      templateOptions: {
        label: 'User Id',
        type: 'number',
        placeholder: 'User Id',
        required: true,
      }
    },
    {
      key: 'row_number',
      type: 'input',
      templateOptions: {
        label: 'Row Number',
        type: 'number',
        placeholder: 'Row Number',
        required: false,
      }
    },
    {
      key: 'seat_number',
      type: 'input',
      templateOptions: {
        label: 'Seat Number',
        placeholder: 'Seat Number',
        type: 'number',
        required: false,
      }
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
