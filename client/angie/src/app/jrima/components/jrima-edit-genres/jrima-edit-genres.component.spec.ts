import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrimaEditGenresComponent } from './jrima-edit-genres.component';

describe('JrimaEditGenresComponent', () => {
  let component: JrimaEditGenresComponent;
  let fixture: ComponentFixture<JrimaEditGenresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrimaEditGenresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrimaEditGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
