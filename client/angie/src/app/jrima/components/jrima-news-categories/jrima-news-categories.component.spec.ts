import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrimaNewsCategoriesComponent } from './jrima-news-categories.component';

describe('JrimaNewsCategoriesComponent', () => {
  let component: JrimaNewsCategoriesComponent;
  let fixture: ComponentFixture<JrimaNewsCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrimaNewsCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrimaNewsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
