import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HttpClientModule } from "@angular/common/http";
import { DataComponent } from './CRUD/data.component';
import { arrRouting } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { EditbasicComponent } from './editbasic/editbasic.component';
import { EditpermanentComponent } from './editpermanent/editpermanent.component';

@NgModule({
  declarations: [AppComponent, ReactiveFormComponent, DataComponent, HeaderComponent, EditbasicComponent, EditpermanentComponent],

  imports: [HttpClientModule, BrowserModule, FormsModule, ReactiveFormsModule, arrRouting],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
