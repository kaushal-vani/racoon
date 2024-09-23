import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RacoonAboutUsSmartComponent } from './racoon-about-us-smart.component';

describe('RacoonAboutUsSmartComponent', () => {
  let component: RacoonAboutUsSmartComponent;
  let fixture: ComponentFixture<RacoonAboutUsSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacoonAboutUsSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RacoonAboutUsSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
