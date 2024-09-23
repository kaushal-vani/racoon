import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RacoonSignUpUiComponent } from './racoon-sign-up-ui.component';

describe('RacoonSignUpUiComponent', () => {
  let component: RacoonSignUpUiComponent;
  let fixture: ComponentFixture<RacoonSignUpUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacoonSignUpUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RacoonSignUpUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
