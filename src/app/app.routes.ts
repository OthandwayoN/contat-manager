import { Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutMeComponent } from './about-me/about-me.component';

export const routes: Routes = [
    { path: 'contacts', component: ContactsComponent },
    { path: 'about', component: AboutMeComponent }, // Create this if needed
    { path: '', redirectTo: '/contacts', pathMatch: 'full' }
  ];
  

