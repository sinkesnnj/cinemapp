import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrimaEditCategoriesComponent } from './jrima-edit-categories.component';

describe('JrimaEditCategoriesComponent', () => {
  let component: JrimaEditCategoriesComponent;
  let fixture: ComponentFixture<JrimaEditCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrimaEditCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrimaEditCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
