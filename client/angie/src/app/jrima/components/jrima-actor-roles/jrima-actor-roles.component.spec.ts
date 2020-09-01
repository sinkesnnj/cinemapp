import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrimaActorRolesComponent } from './jrima-actor-roles.component';

describe('JrimaActorRolesComponent', () => {
  let component: JrimaActorRolesComponent;
  let fixture: ComponentFixture<JrimaActorRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrimaActorRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrimaActorRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
