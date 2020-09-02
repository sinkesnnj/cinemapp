import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrimaEditMovieGenresComponent } from './jrima-edit-movie-genres.component';

describe('JrimaEditMovieGenresComponent', () => {
  let component: JrimaEditMovieGenresComponent;
  let fixture: ComponentFixture<JrimaEditMovieGenresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrimaEditMovieGenresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrimaEditMovieGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
