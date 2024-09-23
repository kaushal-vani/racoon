import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RacoonCheckOutUiComponent } from './racoon-check-out-ui.component';

describe('RacoonCheckOutUiComponent', () => {
  let component: RacoonCheckOutUiComponent;
  let fixture: ComponentFixture<RacoonCheckOutUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacoonCheckOutUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RacoonCheckOutUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
