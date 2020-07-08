import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { EmpserviceService } from './empservice.service';
import { EmployeeComponent } from './employee/employee.component';

describe('EmpserviceService', () => {
  let service: EmpserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


describe('Testing Http Request and Response', ()=>{
 let fixture : ComponentFixture<EmployeeComponent>;
 let component : EmployeeComponent;
 let controller : HttpTestingController;
 let empservice: EmpserviceService;
 beforeEach(()=>{
   TestBed.configureTestingModule({
     declarations : [EmployeeComponent],
     providers : [EmpserviceService],
     imports : [HttpClientTestingModule]
   })

   fixture = TestBed.createComponent(EmployeeComponent);
   component = fixture.componentInstance;
   empservice = TestBed.get(EmpserviceService);
   controller = TestBed.get(HttpTestingController);
 });

 afterEach(()=>{
  controller.verify();
});
  it('empservice should be created',()=>{
    expect(empservice).toBeTruthy();
  })

  it('verifying the response object',fakeAsync(()=>{
    let empdata = [
    {"id":1, "name": "sumit", "age":27},
    {"id":2, "name":"Anshu", "age":26},
    {"id":3, "name":"Anubha", "age":30}
        ]
    empservice.getData().subscribe(
      (data)=>{
        expect(data).toEqual(empdata);
      }
    )
    tick();
    const req= controller.expectOne('/assets/employee.json');
    expect(req.request.method).toBe('GET');
    req.flush(empdata);
  }))

});

