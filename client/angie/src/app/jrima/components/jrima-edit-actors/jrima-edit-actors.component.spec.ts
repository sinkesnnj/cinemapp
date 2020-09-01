import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrimaEditActorsComponent } from './jrima-edit-actors.component';

describe('JrimaEditActorsComponent', () => {
  let component: JrimaEditActorsComponent;
  let fixture: ComponentFixture<JrimaEditActorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrimaEditActorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrimaEditActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
