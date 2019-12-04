import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormRegisterComponent } from './screens/form-register/form-register.component';
import { SectionInputModule } from './screens/section-input/section-input.module';

@NgModule({
  declarations: [
    AppComponent,
    FormRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SectionInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
