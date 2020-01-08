import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './views/main/register/register/register.component';
import { LoginComponent } from './views/main/login/login.component';
import { HomepageComponent } from './views/main/homepage/homepage.component';
import { NotFoundComponent } from './views/main/not-found/not-found.component';
import { ProductsComponent } from './views/user/products/products.component';
import { ProductComponent } from './views/user/product/product.component';
import { IngredientsComponent } from './views/user/ingredients/ingredients.component';
import { IngredientComponent } from './views/user/ingredient/ingredient.component';
import { CompaniesComponent } from './views/user/companies/companies.component';
import { CompanyComponent } from './views/user/company/company.component';
import { ContactsComponent } from './views/user/contacts/contacts.component';
import { UsersComponent } from './views/user/users/users.component';
import { PrivateLabelsComponent } from './views/user/private-labels/private-labels.component';
import { PrivateLabelComponent } from './views/user/private-label/private-label.component';
import { FacilitiesComponent } from './views/user/facilities/facilities.component';
import { FacilityComponent } from './views/user/facility/facility.component';
import { UsersNavComponent } from './views/user/users-nav/users-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactProductsComponent } from './views/contact/contact-products/contact-products.component';
import { ContactProductComponent } from './views/contact/contact-product/contact-product.component';
import { ContactIngredientsComponent } from './views/contact/contact-ingredients/contact-ingredients.component';
import { ContactIngredientComponent } from './views/contact/contact-ingredient/contact-ingredient.component';
import { ContactCompanyComponent } from './views/contact/contact-company/contact-company.component';
import { ContactContactsComponent } from './views/contact/contact-contacts/contact-contacts.component';
import { ContactContactComponent } from './views/contact/contact-contact/contact-contact.component';
import { ContactPrivateLabelComponent } from './views/contact/contact-private-label/contact-private-label.component';
import { ContactPrivateLabelsComponent } from './views/contact/contact-private-labels/contact-private-labels.component';
import { ContactFacilitiesComponent } from './views/contact/contact-facilities/contact-facilities.component';
import { ContactFacilityComponent } from './views/contact/contact-facility/contact-facility.component';
import {EditFacilityComponent} from "./views/contact/contact-facility/edit-facility/edit-facility.component";
import {EditPrivateLabelComponent} from "./views/contact/contact-private-label/edit-private-label/edit-private-label.component";
import { RegisterUserComponent } from './views/main/register/register-user/register-user.component';
import { ContactInformationPipe } from './contact-information.pipe';
import { ContactsNavComponent } from './views/contact/contacts-nav/contacts-nav.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule, MatNativeDateModule,
  MatRadioModule, MatSelectModule, MatSortModule,
  MatTableModule, MatTabsModule, MatToolbarModule,
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { WorkflowComponent } from './views/user/workflow/workflow.component';
import { EditCompanyComponent } from './views/contact/contact-company/edit-company/edit-company.component';
import { EditContactComponent } from './views/contact/contact-contact/edit-contact/edit-contact.component';
import { ContactAddIngredientsToProductsComponent } from './views/contact/contact-product/contact-add-ingredients-to-products/contact-add-ingredients-to-products.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomepageComponent,
    NotFoundComponent,
    ProductsComponent,
    ProductComponent,
    IngredientsComponent,
    IngredientComponent,
    CompaniesComponent,
    CompanyComponent,
    ContactsComponent,
    UsersComponent,
    PrivateLabelsComponent,
    PrivateLabelComponent,
    FacilitiesComponent,
    FacilityComponent,
    UsersNavComponent,
    ContactProductsComponent,
    ContactProductComponent,
    ContactIngredientsComponent,
    ContactIngredientComponent,
    ContactCompanyComponent,
    ContactContactsComponent,
    ContactContactComponent,
    ContactPrivateLabelComponent,
    ContactPrivateLabelsComponent,
    ContactFacilitiesComponent,
    ContactFacilityComponent,
    RegisterUserComponent,
    RegisterComponent,
    ContactInformationPipe,
    ContactsNavComponent,
    EditFacilityComponent,
    EditPrivateLabelComponent,
    WorkflowComponent,
    EditCompanyComponent,
    EditContactComponent,
    ContactAddIngredientsToProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatDialogModule,
    MatTabsModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgbModule,
    MatSortModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
