import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

export interface employee{
  id:number;
  name:string;
  age:number;
}

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
  URL = 'https://httpproject-fa457.firebaseio.com/employee.json'
  constructor(private http: HttpClient) { }

  pushData(data):Observable<employee>{
    return this.http.post<employee>(this.URL, data);
  }

  getData() {
    return this.http.get('/assets/employee.json');
  }
}
