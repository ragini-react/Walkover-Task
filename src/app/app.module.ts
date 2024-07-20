import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



const matModule = [
  MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule
]
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    matModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }