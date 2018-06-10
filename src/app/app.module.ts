import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AsideComponent } from './aside/aside.component';
import { UserComponent } from './user/user.component';
import { SearchComponent } from './search/search.component';
import { CategoriesComponent } from './categories/categories.component';
import { BirthdaysComponent } from './birthdays/birthdays.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactGridComponent } from './contact-grid/contact-grid.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    UserComponent,
    SearchComponent,
    CategoriesComponent,
    BirthdaysComponent,
    CreateContactComponent,
    ContactFormComponent,
    ContactGridComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
