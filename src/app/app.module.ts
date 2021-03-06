import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';
import { OwlModule } from 'ngx-owl-carousel';
import { FormsModule, ReactiveFormsModule}   from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { LaceComponent } from './Components/lace/lace.component';
import { RidaComponent } from './Components/rida/rida.component';
import { RidaProductCartComponent } from './Components//rida-product-cart/rida-product-cart.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { HomeComponent } from './Components/home/home.component';
import { SliderComponent } from './Components/slider/slider.component';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CartComponent } from './Components/cart/cart.component';
import { FilterPipe } from './shared/filter.pipe';
import { CollectionListComponent } from './Components/collection-list/collection-list.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    PageNotFoundComponent,
    RidaComponent,
    RidaProductCartComponent,
    LaceComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProductDetailsComponent,
    CartComponent,
    FilterPipe,
    CollectionListComponent,
    LoginComponent,
    SignupComponent,
    UserDashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OwlModule,
    CarouselModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
