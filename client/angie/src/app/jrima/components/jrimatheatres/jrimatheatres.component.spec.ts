import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrimatheatresComponent } from './jrimatheatres.component';

describe('JrimatheatresComponent', () => {
  let component: JrimatheatresComponent;
  let fixture: ComponentFixture<JrimatheatresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrimatheatresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrimatheatresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
