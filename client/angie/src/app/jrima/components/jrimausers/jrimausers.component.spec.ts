import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrimausersComponent } from './jrimausers.component';

describe('JrimausersComponent', () => {
  let component: JrimausersComponent;
  let fixture: ComponentFixture<JrimausersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrimausersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrimausersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
