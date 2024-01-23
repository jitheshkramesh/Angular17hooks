import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxSignalsComponent } from './rx-signals.component';

describe('RxSignalsComponent', () => {
  let component: RxSignalsComponent;
  let fixture: ComponentFixture<RxSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxSignalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RxSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
