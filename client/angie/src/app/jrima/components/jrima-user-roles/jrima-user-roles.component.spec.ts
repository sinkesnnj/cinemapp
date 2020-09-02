import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrimaUserRolesComponent } from './jrima-user-roles.component';

describe('JrimaUserRolesComponent', () => {
  let component: JrimaUserRolesComponent;
  let fixture: ComponentFixture<JrimaUserRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrimaUserRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrimaUserRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
