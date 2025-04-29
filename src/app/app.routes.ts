import { Routes } from '@angular/router';
     import { HomeComponent } from './home/home.component';
     import { AboutComponent } from './about/about.component';
     import { ServicesComponent } from './services/services.component';
     import { GalleryComponent } from './gallery/gallery.component';
     import { ContactComponent } from './contact/contact.component';
     import { SocialComponent } from './social/social.component';
     import { UsefulComponent } from './useful/useful.component';

     export const routes: Routes = [
       { path: '', component: HomeComponent },
       { path: 'about', component: AboutComponent },
       { path: 'services', component: ServicesComponent },
       { path: 'gallery', component: GalleryComponent },
       { path: 'contact', component: ContactComponent },
       { path: 'social', component: SocialComponent },
       { path: 'useful', component: UsefulComponent },
       { path: '**', redirectTo: '' }
     ];