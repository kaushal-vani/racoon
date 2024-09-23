import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RacoonCheckOutSmartComponent } from './racoon-check-out-smart.component';

describe('RacoonCheckOutSmartComponent', () => {
  let component: RacoonCheckOutSmartComponent;
  let fixture: ComponentFixture<RacoonCheckOutSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacoonCheckOutSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RacoonCheckOutSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
