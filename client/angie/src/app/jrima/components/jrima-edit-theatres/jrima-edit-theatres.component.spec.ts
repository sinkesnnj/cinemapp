import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrimaEditTheatresComponent } from './jrima-edit-theatres.component';

describe('JrimaEditTheatresComponent', () => {
  let component: JrimaEditTheatresComponent;
  let fixture: ComponentFixture<JrimaEditTheatresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrimaEditTheatresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrimaEditTheatresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
