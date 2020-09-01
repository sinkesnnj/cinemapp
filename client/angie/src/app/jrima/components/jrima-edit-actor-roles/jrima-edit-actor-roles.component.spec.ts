import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrimaEditActorRolesComponent } from './jrima-edit-actor-roles.component';

describe('JrimaEditActorRolesComponent', () => {
  let component: JrimaEditActorRolesComponent;
  let fixture: ComponentFixture<JrimaEditActorRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrimaEditActorRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrimaEditActorRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
