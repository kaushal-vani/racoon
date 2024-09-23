import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RacoonLogInUiComponent } from './racoon-log-in-ui.component';

describe('RacoonLogInUiComponent', () => {
  let component: RacoonLogInUiComponent;
  let fixture: ComponentFixture<RacoonLogInUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacoonLogInUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RacoonLogInUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
