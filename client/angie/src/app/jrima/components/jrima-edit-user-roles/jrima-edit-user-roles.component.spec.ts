import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrimaEditUserRolesComponent } from './jrima-edit-user-roles.component';

describe('JrimaEditUserRolesComponent', () => {
  let component: JrimaEditUserRolesComponent;
  let fixture: ComponentFixture<JrimaEditUserRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrimaEditUserRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrimaEditUserRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
