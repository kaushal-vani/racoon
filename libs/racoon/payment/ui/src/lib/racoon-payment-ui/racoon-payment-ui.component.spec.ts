import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RacoonPaymentUiComponent } from './racoon-payment-ui.component';

describe('RacoonPaymentUiComponent', () => {
  let component: RacoonPaymentUiComponent;
  let fixture: ComponentFixture<RacoonPaymentUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacoonPaymentUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RacoonPaymentUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
