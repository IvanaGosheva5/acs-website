import { Routes } from '@angular/router';
   import { HomeComponent } from './home/home.component';

   export const routes: Routes = [
     { path: '', component: HomeComponent },
     { path: 'projects', component: HomeComponent }, // Замени с ProjectsComponent
     { path: 'services', component: HomeComponent }, // Замени с ServicesComponent
     { path: 'services/pergolas', component: HomeComponent },
     { path: 'services/windows', component: HomeComponent },
     { path: 'services/doors', component: HomeComponent },
     { path: 'services/blinds', component: HomeComponent },
     { path: 'services/garage-doors', component: HomeComponent },
     { path: 'partnership', component: HomeComponent }, // Замени с PartnershipComponent
     { path: 'partnership/franchise', component: HomeComponent },
     { path: 'partnership/builders-architects', component: HomeComponent },
     { path: 'contact', component: HomeComponent }, // Замени с ContactComponent
     { path: 'catalog', component: HomeComponent }, // Замени с CatalogComponent
     { path: '**', redirectTo: '' }
   ];