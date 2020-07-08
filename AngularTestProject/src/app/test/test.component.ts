import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  constructor(private promise : Promise<any>) { }
  ngOnInit(): void {
  }

  promiseOperation(){
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

}
