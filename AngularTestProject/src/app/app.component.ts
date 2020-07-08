import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularTestProject';
  userForm: FormGroup;
  constructor(private fb : FormBuilder){}
  promise;
  
  ngOnInit(){
    this.promise= Promise.resolve('Sumit');

    this.promise.then(
      (data)=>{
        console.log('Data Received'+data);
      },
      (err)=>{
        console.log('Error'+err);
      }
    );
  }
  Login(){
    console.log(this.userForm);
  }
  get username(){
    return this.userForm.get('username');
  }
  get userpassword(){
    return this.userForm.get('userpassword');
  }
  get useremail(){
    return this.userForm.get('useremail');
  }

}
