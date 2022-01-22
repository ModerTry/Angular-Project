import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RidaProductCartComponent } from './rida-product-cart.component';

describe('RidaProductCartComponent', () => {
  let component: RidaProductCartComponent;
  let fixture: ComponentFixture<RidaProductCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RidaProductCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RidaProductCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
