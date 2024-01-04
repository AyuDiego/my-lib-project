import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component'; 
import { BrowserModule } from '@angular/platform-browser'
import { MyTableComponent } from './my-table/my-table.component';


@NgModule({
  declarations: [MyLibComponent, MyTableComponent],
  imports: [
    BrowserModule
  ],
  exports: [MyLibComponent, MyTableComponent]
})
export class MyLibModule { }
