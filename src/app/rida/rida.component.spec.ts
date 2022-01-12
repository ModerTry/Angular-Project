import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RidaComponent } from './rida.component';

describe('RidaComponent', () => {
  let component: RidaComponent;
  let fixture: ComponentFixture<RidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
