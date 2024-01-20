import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEditTdComponent } from './customer-edit-td.component';

describe('CustomerEditTdComponent', () => {
  let component: CustomerEditTdComponent;
  let fixture: ComponentFixture<CustomerEditTdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerEditTdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerEditTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
