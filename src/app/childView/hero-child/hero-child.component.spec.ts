import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { HeroChildComponent } from './hero-child.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

// describe('HeroChildComponent', () => {
//   let component: HeroChildComponent;
//   let fixture: ComponentFixture<HeroChildComponent>;

//   beforeEach(async () => {
//   await  TestBed.configureTestingModule({
//       declarations: [HeroChildComponent],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA]
//     }).compileComponents();

//     fixture = TestBed.createComponent(HeroChildComponent);
//     //component = fixture.componentInstance;
//     component = fixture.debugElement.children[0].componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('HeroChildComponent', () => {
  let component: HeroChildComponent;
  let fixture: ComponentFixture<HeroChildComponent>;

  // UI element
  let name: DebugElement;
  let masterName: DebugElement; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroChildComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroChildComponent);
    component = fixture.componentInstance;

    // UI Element
    name = fixture.debugElement.query(By.css('#name'));
    masterName = fixture.debugElement.query(By.css('#masterName')); 
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
