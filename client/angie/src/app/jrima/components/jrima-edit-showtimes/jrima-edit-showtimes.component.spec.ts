import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrimaEditShowtimesComponent } from './jrima-edit-showtimes.component';

describe('JrimaEditShowtimesComponent', () => {
  let component: JrimaEditShowtimesComponent;
  let fixture: ComponentFixture<JrimaEditShowtimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrimaEditShowtimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrimaEditShowtimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
