import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RacoonProductsSmartComponent } from './racoon-products-smart.component';

describe('RacoonProductsSmartComponent', () => {
  let component: RacoonProductsSmartComponent;
  let fixture: ComponentFixture<RacoonProductsSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacoonProductsSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RacoonProductsSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
