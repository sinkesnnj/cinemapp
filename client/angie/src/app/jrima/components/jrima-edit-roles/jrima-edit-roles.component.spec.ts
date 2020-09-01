import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrimaEditRolesComponent } from './jrima-edit-roles.component';

describe('JrimaEditRolesComponent', () => {
  let component: JrimaEditRolesComponent;
  let fixture: ComponentFixture<JrimaEditRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrimaEditRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrimaEditRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
