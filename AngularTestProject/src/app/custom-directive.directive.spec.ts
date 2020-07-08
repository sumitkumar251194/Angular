import { CustomDirectiveDirective } from './custom-directive.directive';
import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {AppComponent} from './app.component';



xdescribe('CustomDirectiveDirective', () => {
  let component: AppComponent;
  let fixture:ComponentFixture<AppComponent>;
  let el_p : DebugElement;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations : [AppComponent,CustomDirectiveDirective]
    });

    fixture=TestBed.createComponent(AppComponent);
    component=fixture.componentInstance;
    el_p=fixture.debugElement.query(By.css('p'));
  });
  it('should create an instance', () => {
    const directive = new CustomDirectiveDirective();
    expect(directive).toBeTruthy();
  });

  it('background color should be blue on Mouseover',()=>{
    fixture.detectChanges();
    el_p.triggerEventHandler('mouseover',null);
    fixture.detectChanges();
    expect(el_p.nativeElement.style.backgroundColor).toBe("blue");
  });
  it('background color should be red on mouse out',()=>{
    fixture.detectChanges();
    el_p.triggerEventHandler('mouseout',null);
    fixture.detectChanges();
    expect(el_p.nativeElement.style.backgroundColor).toBe("red");
  });
});
