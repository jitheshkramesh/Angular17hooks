import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AncourseComponent } from './ancourse.component';

describe('AncourseComponent', () => {
  let component: AncourseComponent;
  let fixture: ComponentFixture<AncourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AncourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AncourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
