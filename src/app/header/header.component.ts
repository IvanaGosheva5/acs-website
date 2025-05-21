import { Component } from '@angular/core';
   import { TranslateService } from '@ngx-translate/core';
   import { CommonModule } from '@angular/common';
   import { RouterModule } from '@angular/router';
   import { FormsModule } from '@angular/forms';

   @Component({
     selector: 'app-header',
     standalone: true,
     imports: [CommonModule, RouterModule, FormsModule],
     templateUrl: './header.component.html',
     styleUrls: ['./header.component.css']
   })
   export class HeaderComponent {
     languages = ['bg', 'en', 'ru'];
     selectedLanguage = 'bg';
     isMenuOpen = false;

     constructor(private translate: TranslateService) {
       this.translate.setDefaultLang('bg');
       this.translate.use('bg');
     }

     changeLanguage(lang: string) {
       this.translate.use(lang);
       this.selectedLanguage = lang;
     }

     toggleMenu() {
       this.isMenuOpen = !this.isMenuOpen;
     }
   }