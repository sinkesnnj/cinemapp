import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrimacategoriesComponent } from './jrimacategories.component';

describe('JrimacategoriesComponent', () => {
  let component: JrimacategoriesComponent;
  let fixture: ComponentFixture<JrimacategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrimacategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrimacategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
