import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddauthorComponent } from './addauthor.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AddauthorComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatInputModule
  ],
  exports:[
    AddauthorComponent
  ]
})
export class AddauthorModule { }
