import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RacoonSharedComponent } from './racoon-shared.component';

describe('RacoonSharedComponent', () => {
  let component: RacoonSharedComponent;
  let fixture: ComponentFixture<RacoonSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacoonSharedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RacoonSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
