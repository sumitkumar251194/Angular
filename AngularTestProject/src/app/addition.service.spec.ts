import { TestBed } from '@angular/core/testing';

import { AdditionService } from './addition.service';


describe('Service: Addition',()=>{
  let additionService : AdditionService;

  beforeEach(()=>{
     additionService = new AdditionService();
  })
  afterEach(()=>{
     additionService=null;
  })
   it('Addition of Number', ()=>{
     //const result:number = additionService.addition(10,20);
     //expect(result).toBe(30);
   })

})
