import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { FormGroup } from '@angular/forms';
//import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



//import {RouterModule, Routes} from '@angular/router';
//import { Injectable } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { MemberService } from './member.service';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ReadComponent } from './read/read.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    ReadComponent,
    
    //FormGroup,

    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    //FormsModule,
    //FormGroup,
    //RouterModule.forRoot()
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
