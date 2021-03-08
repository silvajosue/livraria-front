<<<<<<< HEAD
import { NgModule } from '@angular/core';
=======
>>>>>>> 01f81e242ffe81594b8022fe35117c820dfb3e7b
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { MenubarModule } from 'primeng';
=======

import {MenubarModule} from 'primeng-lts/menubar';
>>>>>>> 01f81e242ffe81594b8022fe35117c820dfb3e7b
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
