import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RacoonSignUpSmartComponent } from './racoon-sign-up-smart.component';

describe('RacoonSignUpSmartComponent', () => {
  let component: RacoonSignUpSmartComponent;
  let fixture: ComponentFixture<RacoonSignUpSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacoonSignUpSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RacoonSignUpSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
