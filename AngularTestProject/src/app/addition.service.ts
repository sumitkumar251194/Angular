import { Injectable } from '@angular/core';
import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdditionService {
  value: Observable<number>
  constructor() { }
  addition(num1:number,num2:number) {
    return Observable.create((observer)=>{
        observer.next(num1+num2);
    })
  }
}
