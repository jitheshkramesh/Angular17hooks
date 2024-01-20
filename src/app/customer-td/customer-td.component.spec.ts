import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTDComponent } from './customer-td.component';

describe('CustomerTDComponent', () => {
  let component: CustomerTDComponent;
  let fixture: ComponentFixture<CustomerTDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerTDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerTDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
