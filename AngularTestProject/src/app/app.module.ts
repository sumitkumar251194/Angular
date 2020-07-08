import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AgePipe } from './age.pipe';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ValidateComponent } from './validate/validate.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    AgePipe,
    ValidateComponent,
    CustomDirectiveDirective,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
