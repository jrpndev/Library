import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetAuthorComponent } from './get-author.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    GetAuthorComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatInputModule
  ]
})
export class GetAuthorModule { }
