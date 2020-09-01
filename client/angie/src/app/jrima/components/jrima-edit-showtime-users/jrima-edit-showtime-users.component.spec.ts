import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrimaEditShowtimeUsersComponent } from './jrima-edit-showtime-users.component';

describe('JrimaEditShowtimeUsersComponent', () => {
  let component: JrimaEditShowtimeUsersComponent;
  let fixture: ComponentFixture<JrimaEditShowtimeUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrimaEditShowtimeUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrimaEditShowtimeUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
