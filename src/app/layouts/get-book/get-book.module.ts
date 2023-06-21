import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetBookComponent } from './get-book.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    GetBookComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatInputModule
  ],
  exports:[
    GetBookComponent
  ]
})
export class GetBookModule { }