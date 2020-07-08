import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Promise-project';
  promise: any;
  datavalue:string;
  Login(){
    this.promise = new Promise((resolve,reject)=>{
         resolve('Sumit'); // 1
         //reject('sumitkumar'); //2
    })
    this.promise.then(
      (data)=>{ //3
        console.log('Promise Resolved value'+data);
        this.datavalue=data;
      },
      (err)=>{ //4
        console.log('Error Received'+err);
      }
    ).finally(()=>{ //5
      console.log('At last I am always gets executed');
    })
    
  }
}
