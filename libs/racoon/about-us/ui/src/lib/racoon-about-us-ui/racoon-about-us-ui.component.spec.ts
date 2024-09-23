import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RacoonAboutUsUiComponent } from './racoon-about-us-ui.component';

describe('RacoonAboutUsUiComponent', () => {
  let component: RacoonAboutUsUiComponent;
  let fixture: ComponentFixture<RacoonAboutUsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacoonAboutUsUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RacoonAboutUsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
