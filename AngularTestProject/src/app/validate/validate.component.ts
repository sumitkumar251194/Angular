import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {

  @Input() public userData;
  @Output() public property = new EventEmitter(); 
  val:boolean= true;
  constructor() { 
   
  }

  ngOnInit(): void {
   
  }
  sendMessage(){
    this.property.emit(this.val);
    console.log(this.userData);
  }

}
