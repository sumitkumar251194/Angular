import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {
  @HostBinding('style.background-color') color_value : string;
  constructor() { }

  @HostListener('mouseover') Onover(){
    this.color_value="blue";
  }
  @HostListener('mouseout') Onout(){
    this.color_value="red";
  }
  

}
