import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageModule } from './components/homepage/homepage.module';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddBookModule } from './layouts/addbook/addbook.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AddauthorModule } from './layouts/addauthor/addauthor.module';
import { DeletebookModule } from './layouts/deletebook/deletebook.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DeletebookModule,
    HomepageModule,
    DeletebookModule,
    BrowserModule,
    AddBookModule,
    AppRoutingModule,
    AddauthorModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
