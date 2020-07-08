import { Component, OnInit } from '@angular/core';
import {EmpserviceService} from '../empservice.service';
import {employee} from '../empservice.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee_data = [
    {"id":1, "name": "sumit", "age":27},
    {"id":2, "name":"Anshu", "age":26},
    {"id":3, "name":"Anubha", "age":30}
  ];
  employee_data_bkp;
  constructor(private _empservice : EmpserviceService) { }
  ngOnInit(): void {
  }
  sendData(){
     this._empservice.pushData(this.employee_data).subscribe(
       (data)=>{
         console.log(data);
       },
       (err)=>{
         console.log("Error in sending data"+err);
       },
       ()=>{
         console.log("Data Pushed Sucessfully..");
       }
     );
  }
  getData(){
     this._empservice.getData().subscribe(
       (data)=>{
         console.log("Data Receive is ");
         console.log(data);
         this.employee_data_bkp = data;
         console.log("Data Captured ");
         console.log(this.employee_data_bkp);
       }
     )
  }
}
