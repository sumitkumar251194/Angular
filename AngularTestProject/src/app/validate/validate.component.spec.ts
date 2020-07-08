
import {ValidateComponent} from './validate.component';
import { TestBed, ComponentFixture, fakeAsync,tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Validate Component',()=>{
  let component : ValidateComponent;
  let fixture : ComponentFixture<ValidateComponent>;
  let button_el : DebugElement;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations : [ValidateComponent]
    });
    fixture = TestBed.createComponent(ValidateComponent);
    component = fixture.componentInstance;
    button_el = fixture.debugElement.query(By.css('button'));
  });

  it(' clicking sendMessage should emit true boolean',fakeAsync(()=>{
    // testing @output decorator.
    
    let result:boolean;
    component.property.subscribe((data)=>{
      result = data;
    });
    button_el.nativeElement.click();
    tick();
    expect(result).toBeTruthy();
  }));

  it('setting the value of input decorator field',()=>{
     // setting value for input decorator field.
     component.userData = "sumit";
     expect(component.userData).toBe("sumit");
  });

});