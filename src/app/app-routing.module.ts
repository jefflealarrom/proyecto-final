import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { WomanComponent } from './components/woman/woman.component';
import { ManComponent } from './components/man/man.component';
import { RegistreComponent } from './components/registre/registre.component';
import { DetailsComponent } from './components/details/details.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { ShopComponent } from './components/shop/shop.component';
import { ErrorComponent } from './components/error/error.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AboutComponent } from './components/about/about.component';
import { ShowUserComponent } from './components/show-user/show-user.component';
import { EdisUserComponent } from './components/edis-user/edis-user.component';
import { loginGuard } from './components/guards/login.guards';
import { AboutweComponent } from './components/aboutwe/aboutwe.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'allProducts', component: AllProductsComponent },
  { path: 'detail/:id', component: DetailsComponent },
  { path: 'woman', component: WomanComponent },
  { path: 'man', component: ManComponent },
  { path: 'registre', component: RegistreComponent },
  { path: 'logIn', component: LogInComponent },
  { path: 'logOut', component: LogOutComponent },
  { path: 'shop', component: ShopComponent, canActivate: [loginGuard] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [loginGuard]},
  { path: 'user', component:ShowUserComponent, canActivate: [loginGuard] },
  { path: 'edit-user', component: EdisUserComponent, canActivate: [loginGuard] },
  { path: 'footer', component: AboutComponent },
  { path: 'aboutwe', component: AboutweComponent},
  { path: '**', component: ErrorComponent },
  
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})

export class AppRoutingModule { }

