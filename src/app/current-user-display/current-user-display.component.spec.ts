import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentUserDisplayComponent } from './current-user-display.component';

describe('CurrentUserDisplayComponent', () => {
  let component: CurrentUserDisplayComponent;
  let fixture: ComponentFixture<CurrentUserDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentUserDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentUserDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
