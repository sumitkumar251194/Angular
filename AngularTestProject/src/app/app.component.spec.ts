import {AppComponent} from './app.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('App Component',()=>{
  let component : AppComponent;
  let fixture : ComponentFixture<AppComponent>;
  let username_el : DebugElement;
  let password_el : DebugElement;
  let email_el : DebugElement;
  let submitbutton_el : DebugElement;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[AppComponent],
      imports:[ReactiveFormsModule]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    username_el = fixture.debugElement.query(By.css('.user-class'));
    password_el = fixture.debugElement.query(By.css('.password-class'));
    email_el =  fixture.debugElement.query(By.css('.email-class'));
    submitbutton_el = fixture.debugElement.query(By.css('button'));
    component.ngOnInit();

  });
  it('Field value should bind with Model',()=>{
      component.userForm.setValue({
       username:'sumit123',
       userpassword:'sumit12345',
       useremail:'skumar251194@gmail.com'
     }); 
     
     expect(component.username.value).toBe("sumit123");
     expect(component.userpassword.value).toBe("sumit12345");
     expect(component.useremail.value).toBe("skumar251194@gmail.com");

  })

  it('Submit should submit the form',()=>{
    
  })

  it('Form Validation checking',()=>{
    component.userForm.setValue({
      username:'sumit123',
      userpassword:'sumit12345',
      useremail:'skumar251194@gmail.com'
    }); 

    expect(component.userForm.valid).toBeTruthy();
    expect(component.userForm.invalid).toBeFalsy();
  })

  it('validation check for username field',()=>{
    component.userForm.setValue({
      username:'',
      userpassword:'sumit12345',
      useremail:'skumar251194@gmail.com'
    }); 

    expect(component.username.invalid).toBeTruthy();
    expect(component.username.errors.required).toBeTruthy();
    expect(component.userpassword.valid).toBeTruthy();
    expect(component.useremail.valid).toBeTruthy();
  })

  it('validation check for userpassword field',()=>{
    component.userForm.setValue({
      username:'sumit123',
      userpassword:'sumi',
      useremail:'skumar251194@gmail.com'
    }); 

    expect(component.username.valid).toBeTruthy();
    expect(component.userpassword.invalid).toBeTruthy();
    expect(component.useremail.valid).toBeTruthy();
  })

  it('Validation check for useremail field',()=>{
    component.userForm.setValue({
      username:'sumit123',
      userpassword:'sumit12345',
      useremail:'skumar'
    }); 

    expect(component.username.valid).toBeTruthy();
    expect(component.userpassword.valid).toBeTruthy();
    expect(component.useremail.invalid).toBeTruthy();
  })
});