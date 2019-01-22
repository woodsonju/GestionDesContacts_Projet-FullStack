import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ContactsService } from './services/contacts.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NewContactComponent } from './new-contact/new-contact.component';
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';


const appRoutes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'newContact', component: NewContactComponent},
    {path: 'editContact/:id', component: EditContactComponent},
    {path: '', 
     redirectTo: '/contacts',
     pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    HeaderComponent,
    NewContactComponent,
    NouveauContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
    
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
