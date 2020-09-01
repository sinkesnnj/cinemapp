import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrimaRolesComponent } from './jrima-roles.component';

describe('JrimaRolesComponent', () => {
  let component: JrimaRolesComponent;
  let fixture: ComponentFixture<JrimaRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrimaRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrimaRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
