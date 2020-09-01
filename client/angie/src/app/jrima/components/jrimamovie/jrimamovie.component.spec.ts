import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrimamovieComponent } from './jrimamovie.component';

describe('JrimamovieComponent', () => {
  let component: JrimamovieComponent;
  let fixture: ComponentFixture<JrimamovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrimamovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrimamovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
