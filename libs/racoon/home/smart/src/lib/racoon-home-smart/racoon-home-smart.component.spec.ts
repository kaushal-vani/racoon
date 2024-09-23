import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RacoonHomeSmartComponent } from './racoon-home-smart.component';

describe('RacoonHomeSmartComponent', () => {
  let component: RacoonHomeSmartComponent;
  let fixture: ComponentFixture<RacoonHomeSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacoonHomeSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RacoonHomeSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
