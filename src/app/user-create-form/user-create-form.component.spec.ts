import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateFormComponent } from './user-create-form.component';

describe('UserCreateComponent', () => {
  let component: UserCreateFormComponent;
  let fixture: ComponentFixture<UserCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCreateFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
