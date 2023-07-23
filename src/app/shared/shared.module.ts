import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';



@NgModule({
  declarations: [ 
    HeaderComponent, 
    FooterComponent, 
    SpinnerComponent, 
    SelectComponent 
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    RouterModule,
  ],
  exports: [ 
    FormsModule,
    HeaderComponent, 
    FooterComponent, 
    SpinnerComponent, 
    SelectComponent,
  ],
})
export class SharedModule { }
