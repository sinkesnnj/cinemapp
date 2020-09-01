import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrimaEditNewsComponent } from './jrima-edit-news.component';

describe('JrimaEditNewsComponent', () => {
  let component: JrimaEditNewsComponent;
  let fixture: ComponentFixture<JrimaEditNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrimaEditNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrimaEditNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
