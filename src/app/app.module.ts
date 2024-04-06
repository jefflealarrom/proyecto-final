import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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
import { FooterComponent } from './components/footer/footer.component';

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
