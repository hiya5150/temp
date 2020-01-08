import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompaniesComponent} from './views/user/companies/companies.component';
import {CompanyComponent} from './views/user/company/company.component';
import {LoginComponent} from './views/main/login/login.component';
import {FacilityComponent} from './views/user/facility/facility.component';
import {PrivateLabelComponent} from './views/user/private-label/private-label.component';
import {HomepageComponent} from './views/main/homepage/homepage.component';
import {ProductComponent} from './views/user/product/product.component';
import {IngredientComponent} from './views/user/ingredient/ingredient.component';
import {FacilitiesComponent} from './views/user/facilities/facilities.component';
import {PrivateLabelsComponent} from './views/user/private-labels/private-labels.component';
import {RegisterComponent} from './views/main/register/register/register.component';
import {ProductsComponent} from './views/user/products/products.component';
import {IngredientsComponent} from './views/user/ingredients/ingredients.component';
import {ContactsComponent} from './views/user/contacts/contacts.component';
import {ContactCompanyComponent} from './views/contact/contact-company/contact-company.component';
import {ContactFacilityComponent} from './views/contact/contact-facility/contact-facility.component';
import {ContactFacilitiesComponent} from './views/contact/contact-facilities/contact-facilities.component';
import {ContactPrivateLabelsComponent} from './views/contact/contact-private-labels/contact-private-labels.component';
import {ContactPrivateLabelComponent} from './views/contact/contact-private-label/contact-private-label.component';
import {ContactContactComponent} from './views/contact/contact-contact/contact-contact.component';
import {ContactProductsComponent} from './views/contact/contact-products/contact-products.component';
import {ContactProductComponent} from './views/contact/contact-product/contact-product.component';
import {ContactIngredientsComponent} from './views/contact/contact-ingredients/contact-ingredients.component';
import {ContactIngredientComponent} from './views/contact/contact-ingredient/contact-ingredient.component';
import {UsersComponent} from './views/user/users/users.component';
import {EditFacilityComponent} from "./views/contact/contact-facility/edit-facility/edit-facility.component";
import {EditPrivateLabelComponent} from "./views/contact/contact-private-label/edit-private-label/edit-private-label.component";
import {WorkflowComponent} from './views/user/workflow/workflow.component';
import {EditCompanyComponent} from "./views/contact/contact-company/edit-company/edit-company.component";
import {ContactContactsComponent} from "./views/contact/contact-contacts/contact-contacts.component";
import {EditContactComponent} from "./views/contact/contact-contact/edit-contact/edit-contact.component";
import {UserGuard} from './controllers/user.guard';
import {ContactGuard} from './controllers/contact.guard';
import {NotFoundComponent} from './views/main/not-found/not-found.component';
import {ContactAddIngredientsToProductsComponent} from "./views/contact/contact-product/contact-add-ingredients-to-products/contact-add-ingredients-to-products.component";


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent},
  {path: 'main/homepage', component: HomepageComponent},
  {path: 'user/companies', component: CompaniesComponent, canActivate: [UserGuard]},
  {path: 'user/company/:companyId', component: CompanyComponent, canActivate: [UserGuard]},
  {path: 'user/facility/:facilityId', component: FacilityComponent, canActivate: [UserGuard]},
  {path: 'user/facilities', component: FacilitiesComponent, canActivate: [UserGuard]},
  {path: 'user/privateLabels', component: PrivateLabelsComponent, canActivate: [UserGuard]},
  {path: 'user/privateLabel/:privateLabelId', component: PrivateLabelComponent, canActivate: [UserGuard]},
  {path: 'user/contacts', component: ContactsComponent, canActivate: [UserGuard]},
  {path: 'user/products', component: ProductsComponent, canActivate: [UserGuard]},
  {path: 'user/product/:productId', component: ProductComponent, canActivate: [UserGuard]},
  {path: 'user/ingredients', component: IngredientsComponent, canActivate: [UserGuard]},
  {path: 'user/ingredient/:ingredientId', component: IngredientComponent, canActivate: [UserGuard]},
  {path: 'user/users', component: UsersComponent, canActivate: [UserGuard]},
  {path: 'user/workflow', component: WorkflowComponent, canActivate: [UserGuard]},
  {path: 'main/register', component: RegisterComponent},
  {path: 'contact/login', component: LoginComponent},
  {path: 'contact/company', component: ContactCompanyComponent,},
    // canActivate: [ContactGuard]},
  {path: 'contact/facility/:facilityId', component: ContactFacilityComponent},
  // canActivate: [ContactGuard]},
  {path: 'contact/facilities', component: ContactFacilitiesComponent},
  // canActivate: [ContactGuard]},
  {path: 'contact/privateLabels', component: ContactPrivateLabelsComponent},
  // canActivate: [ContactGuard]},
  {path: 'contact/privateLabel/:plId', component: ContactPrivateLabelComponent},
  // canActivate: [ContactGuard]},
  {path: 'contact/contacts', component: ContactContactsComponent},
  {path: 'contact/contact/:contactId', component: ContactContactComponent},    // canActivate: [ContactGuard]},
  {path: 'contact/products', component: ContactProductsComponent},     // canActivate: [ContactGuard]},
  {path: 'contact/product/:productId', component: ContactProductComponent},
  // canActivate: [ContactGuard]},
  {path: 'contact/product/contact-add-ingredients-to-products:productId', component: ContactAddIngredientsToProductsComponent},
  {path: 'contact/ingredients', component: ContactIngredientsComponent},    // canActivate: [ContactGuard]},
  {path: 'contact/ingredient/:ingredientId', component: ContactIngredientComponent},     // canActivate: [ContactGuard]},
  {path: 'contact/facility/editFacility/:facilityId', component: EditFacilityComponent},
  // canActivate: [ContactGuard]},
  {path: 'contact/privateLabel/editPrivateLabel/:plId', component: EditPrivateLabelComponent},
  // canActivate: [ContactGuard]},
  {path: 'contact/company/edit-company', component: EditCompanyComponent},     // canActivate: [ContactGuard]},
  {path: 'contact/contact/edit-contact', component: EditContactComponent},     // canActivate: [ContactGuard]},
  {path: '**', component: NotFoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
