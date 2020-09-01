import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrimaEditMovieActorsComponent } from './jrima-edit-movie-actors.component';

describe('JrimaEditMovieActorsComponent', () => {
  let component: JrimaEditMovieActorsComponent;
  let fixture: ComponentFixture<JrimaEditMovieActorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrimaEditMovieActorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrimaEditMovieActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
