import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RacoonAuthenticationUiComponent } from './racoon-authentication-ui.component';

describe('RacoonAuthenticationUiComponent', () => {
  let component: RacoonAuthenticationUiComponent;
  let fixture: ComponentFixture<RacoonAuthenticationUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacoonAuthenticationUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RacoonAuthenticationUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
