import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrimaEditUsersComponent } from './jrima-edit-users.component';

describe('JrimaEditUsersComponent', () => {
  let component: JrimaEditUsersComponent;
  let fixture: ComponentFixture<JrimaEditUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrimaEditUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrimaEditUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
