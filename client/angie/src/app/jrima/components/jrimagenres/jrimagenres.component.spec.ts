import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrimagenresComponent } from './jrimagenres.component';

describe('JrimagenresComponent', () => {
  let component: JrimagenresComponent;
  let fixture: ComponentFixture<JrimagenresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrimagenresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrimagenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
