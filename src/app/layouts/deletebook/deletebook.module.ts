import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletebookComponent } from './deletebook.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    DeletebookComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatOptionModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  exports:[
    DeletebookComponent
  ]
})
export class DeletebookModule { }
