import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrimaEditMoviesComponent } from './jrima-edit-movies.component';

describe('JrimaEditMoviesComponent', () => {
  let component: JrimaEditMoviesComponent;
  let fixture: ComponentFixture<JrimaEditMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrimaEditMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrimaEditMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
