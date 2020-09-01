import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrimaShowtimeUsersComponent } from './jrima-showtime-users.component';

describe('JrimaShowtimeUsersComponent', () => {
  let component: JrimaShowtimeUsersComponent;
  let fixture: ComponentFixture<JrimaShowtimeUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrimaShowtimeUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrimaShowtimeUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
