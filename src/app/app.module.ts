import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';
import { OwlModule } from 'ngx-owl-carousel';
import { FormsModule }   from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { RidaComponent } from './rida/rida.component';
import { PannelComponent } from './pannel/pannel.component';
import { LaceComponent } from './lace/lace.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    RidaComponent,
    PannelComponent,
    LaceComponent,
    routingComponents,
    PageNotFoundComponent,
    HomeComponent,
    SliderComponent
   
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    OwlModule,
    CarouselModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
