import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrimaMovieActorsComponent } from './jrima-movie-actors.component';

describe('JrimaMovieActorsComponent', () => {
  let component: JrimaMovieActorsComponent;
  let fixture: ComponentFixture<JrimaMovieActorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrimaMovieActorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrimaMovieActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
