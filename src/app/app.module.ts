import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material';


const routes:Routes = [
  {path:'contactmanager', loadChildren:'./contactmanager/contactmanager.module#ContactmanagerModule'},
  {path:'demo', loadChildren:'./demo/demo.module#DemoModule'},
  {path:'**', redirectTo:'contactmanager'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'es-ES'},],
  bootstrap: [AppComponent]
})
export class AppModule { }
