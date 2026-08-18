import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOverlayFormComponent } from './login-overlay-form.component';

describe('LoginOverlayFormComponent', () => {
  let component: LoginOverlayFormComponent;
  let fixture: ComponentFixture<LoginOverlayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginOverlayFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginOverlayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
