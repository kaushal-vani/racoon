import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RacoonFeedBackUiComponent } from './racoon-feed-back-ui.component';

describe('RacoonFeedBackUiComponent', () => {
  let component: RacoonFeedBackUiComponent;
  let fixture: ComponentFixture<RacoonFeedBackUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacoonFeedBackUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RacoonFeedBackUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
