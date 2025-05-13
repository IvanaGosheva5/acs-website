import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { ServicesComponent } from './app/services/services.component';
import { GalleryComponent } from './app/gallery/gallery.component';
import { ContactComponent } from './app/contact/contact.component';
import { SocialComponent } from './app/social/social.component';
import { UsefulComponent } from './app/useful/useful.component';

// Дефиниране на маршрутите
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'introduction', component: HomeComponent },
  { path: 'news', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'about/team', component: AboutComponent },
  { path: 'about/history', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/consulting', component: ServicesComponent },
  { path: 'services/support', component: ServicesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'gallery/projects', component: GalleryComponent },
  { path: 'gallery/events', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact/support', component: ContactComponent },
  { path: 'contact/feedback', component: ContactComponent },
  { path: 'social', component: SocialComponent },
  { path: 'useful', component: UsefulComponent },
  { path: 'useful/faq', component: UsefulComponent },
  { path: 'useful/resources', component: UsefulComponent },
  { path: '**', redirectTo: '' }
];

// Функция за зареждане на преводи
export function HttpLoaderFactory(http: HttpClient) {
  console.log('HttpLoaderFactory called');
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    },
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }).providers || []
  ]
}).catch(err => console.error('Bootstrap error:', err));