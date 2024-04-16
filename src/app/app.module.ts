import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ManComponent } from './components/man/man.component';
import { WomanComponent } from './components/woman/woman.component';
import { ShopComponent } from './components/shop/shop.component';
import { RegistreComponent } from './components/registre/registre.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailsComponent } from './components/details/details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AboutComponent } from "../app/components/about/about.component";
import { ShowUserComponent } from './components/show-user/show-user.component';
import { EdisUserComponent } from './components/edis-user/edis-user.component';
import { BestSellerComponent } from './components/best-seller/best-seller.component';








@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AllProductsComponent,
    ManComponent,
    WomanComponent,
    ShopComponent,
    RegistreComponent,
    LogInComponent,
    LogOutComponent,
    HomeComponent,
    ErrorComponent,
    DetailsComponent,
    CheckoutComponent,
    AboutComponent,
    ShowUserComponent,
    EdisUserComponent,
    BestSellerComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
