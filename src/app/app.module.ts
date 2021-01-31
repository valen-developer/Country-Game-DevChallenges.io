import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

//NGRX
// import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { CountryModule } from './countries/country.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountryModule,
    HttpClientModule,
    ReactiveFormsModule,
    // StoreModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
