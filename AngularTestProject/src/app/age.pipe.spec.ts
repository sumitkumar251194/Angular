import { AgePipe } from './age.pipe';

describe('AgePipe', () => {

  let pipe: AgePipe;
  beforeEach(()=>{
    pipe=new AgePipe();
  });

  afterEach(()=>{
    pipe=null;
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

   it('it should return sum by taking two number',()=>{
     const result:number = pipe.transform(10,30);
     expect(result).toBe(40);
   })


});
