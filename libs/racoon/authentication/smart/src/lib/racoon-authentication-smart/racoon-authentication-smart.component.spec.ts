import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RacoonAuthenticationSmartComponent } from './racoon-authentication-smart.component';

describe('RacoonAuthenticationSmartComponent', () => {
  let component: RacoonAuthenticationSmartComponent;
  let fixture: ComponentFixture<RacoonAuthenticationSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacoonAuthenticationSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RacoonAuthenticationSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
