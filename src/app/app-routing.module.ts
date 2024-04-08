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
import { FooterComponent } from './components/footer/footer.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'allProducts', component: AllProductsComponent },
  { path: 'detail/:id', component: DetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'woman', component: WomanComponent },
  { path: 'man', component: ManComponent },
  { path: 'registre', component: RegistreComponent },
  { path: 'logIn', component: LogInComponent },
  { path: 'logOut', component: LogOutComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'footer', component: FooterComponent },
  { path: '**', component: ErrorComponent },


];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
export class AppRoutingModule { }
