import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrimaMovieGenresComponent } from './jrima-movie-genres.component';

describe('JrimaMovieGenresComponent', () => {
  let component: JrimaMovieGenresComponent;
  let fixture: ComponentFixture<JrimaMovieGenresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrimaMovieGenresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrimaMovieGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
