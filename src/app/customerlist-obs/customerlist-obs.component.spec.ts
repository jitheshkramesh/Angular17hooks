import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerlistObsComponent } from './customerlist-obs.component';

describe('CustomerlistObsComponent', () => {
  let component: CustomerlistObsComponent;
  let fixture: ComponentFixture<CustomerlistObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerlistObsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerlistObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
