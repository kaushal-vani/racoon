import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RacoonPaymentSmartComponent } from './racoon-payment-smart.component';

describe('RacoonPaymentSmartComponent', () => {
  let component: RacoonPaymentSmartComponent;
  let fixture: ComponentFixture<RacoonPaymentSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacoonPaymentSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RacoonPaymentSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
