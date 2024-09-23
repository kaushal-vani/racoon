import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RacoonHomeUiComponent } from './racoon-home-ui.component';

describe('RacoonHomeUiComponent', () => {
  let component: RacoonHomeUiComponent;
  let fixture: ComponentFixture<RacoonHomeUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacoonHomeUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RacoonHomeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
