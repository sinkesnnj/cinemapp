import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrimanewsComponent } from './jrimanews.component';

describe('JrimanewsComponent', () => {
  let component: JrimanewsComponent;
  let fixture: ComponentFixture<JrimanewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrimanewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrimanewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
