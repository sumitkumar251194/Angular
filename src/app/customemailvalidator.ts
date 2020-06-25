import { AbstractControl, ValidatorFn } from '@angular/forms';


export function customEmailValidator(str : RegExp) : ValidatorFn {
    return (control : AbstractControl) => {
        const email = control.value;
        const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        var flag1 = re.test(email);
        const flag = str.test(email);
        if(flag || flag1){
            return {
              isError:true,
              error_message: 'Entered email pattern is not valid'
            }
        }else{
            return null;
        }
    }
 
}

export function customPasswordValidation(control : AbstractControl) : {} | null {
  const cnf_password = control.get('cnf_password').value;
  const password = control.get('password').value;

  if ( (password === cnf_password) && (password === cnf_password != null) ) {
      return {
          isError : false
      };
  }else{
      return {
          isError: true,
          error_message: 'Password matching failed'

      }
  }
}
