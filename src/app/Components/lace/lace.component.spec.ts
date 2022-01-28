import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaceComponent } from './lace.component';

describe('LaceComponent', () => {
  let component: LaceComponent;
  let fixture: ComponentFixture<LaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
