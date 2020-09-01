import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrimaactorsComponent } from './jrimaactors.component';

describe('JrimaactorsComponent', () => {
  let component: JrimaactorsComponent;
  let fixture: ComponentFixture<JrimaactorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrimaactorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrimaactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
