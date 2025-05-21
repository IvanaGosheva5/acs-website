import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ЕЙ СИ ЕС ЕООД';
  menuOpen = false;

  constructor(private translate: TranslateService) {
    translate.addLangs(['bg', 'en', 'ru']);
    translate.setDefaultLang('bg');
    const savedLang = localStorage.getItem('language') || 'bg';
    translate.use(savedLang);
    console.log('Current language:', savedLang);
  }

  ngOnInit(): void {}

  changeLanguage(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
    console.log(`Selected language: ${lang}`);
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}