// Shared Module

// All packages used in the shared components [header/footer/select/spinner]
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// Moudule
@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    BrowserModule ,
    FormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports : [
    HeaderComponent,
    BrowserModule ,
    SpinnerComponent,
    RouterModule,
    FormsModule,
    SelectComponent
  ]
})
  
export class SharedModule { }
