import {AppComponent} from './app.component';

describe('App Component Test',()=>{
 let demoMultiplication:any;
 it('CreateSpy should create the imaginary method',()=>{
   demoMultiplication = jasmine.createSpy('Multiplication');
   expect(demoMultiplication).toBeDefined();
 })
 it('Multiplication should be called',()=>{
   demoMultiplication = jasmine.createSpy('Multiplication');
   demoMultiplication(1)
   expect(demoMultiplication).toHaveBeenCalledWith(1);
   let demolist =jasmine.createSpyObj(['add','remove']);
   demolist.add();
   demolist.remove();
   expect(demolist.add).toBeDefined();
   expect(demolist.remove).toBeDefined();
   expect(demolist.add).toHaveBeenCalled();

 })
})