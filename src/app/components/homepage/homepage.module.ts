import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input'; // Add this line
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'; // Importe o MatButtonModule aqui

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
