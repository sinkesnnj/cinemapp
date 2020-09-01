import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrimashowtimesComponent } from './jrimashowtimes.component';

describe('JrimashowtimesComponent', () => {
  let component: JrimashowtimesComponent;
  let fixture: ComponentFixture<JrimashowtimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrimashowtimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrimashowtimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
