import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RacoonProductsUiComponent } from './racoon-products-ui.component';

describe('RacoonProductsUiComponent', () => {
  let component: RacoonProductsUiComponent;
  let fixture: ComponentFixture<RacoonProductsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacoonProductsUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RacoonProductsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
