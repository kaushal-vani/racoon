import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RacoonLogInSmartComponent } from './racoon-log-in-smart.component';

describe('RacoonLogInSmartComponent', () => {
  let component: RacoonLogInSmartComponent;
  let fixture: ComponentFixture<RacoonLogInSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacoonLogInSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RacoonLogInSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
