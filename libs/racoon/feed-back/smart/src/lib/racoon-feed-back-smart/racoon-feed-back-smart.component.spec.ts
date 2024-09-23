import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RacoonFeedBackSmartComponent } from './racoon-feed-back-smart.component';

describe('RacoonFeedBackSmartComponent', () => {
  let component: RacoonFeedBackSmartComponent;
  let fixture: ComponentFixture<RacoonFeedBackSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacoonFeedBackSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RacoonFeedBackSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
