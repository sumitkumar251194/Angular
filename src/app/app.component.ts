import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';
import { customEmailValidator, customPasswordValidation } from './customemailvalidator';

class user{
   name:string;
   city:string;
   state:string;
   constructor(name:string,city:string,state:string){
     this.name=name;
     this.city=city;
     this.state=state;
   }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'form-demo';
  userForm : FormGroup;
  userobj : user;
  constructor(private fb : FormBuilder){
    this.userobj = new user('sumit','Aurangabad','Bihar');
  }
  ngOnInit(){}
  
}
 