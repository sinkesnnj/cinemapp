import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrimaEditNewsCategoriesComponent } from './jrima-edit-news-categories.component';

describe('JrimaEditNewsCategoriesComponent', () => {
  let component: JrimaEditNewsCategoriesComponent;
  let fixture: ComponentFixture<JrimaEditNewsCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrimaEditNewsCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrimaEditNewsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
