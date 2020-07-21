import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HomeComponent } from './home/home.component';
import { TermsComponent } from './terms/terms.component';

@NgModule({
  
  declarations: [
    AppComponent,
    HomeComponent,
    TermsComponent,
  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot([
    {path: 'terms', component: TermsComponent},
    {path: '', component: HomeComponent},
   ]),
    SlickCarouselModule ,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
