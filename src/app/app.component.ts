import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ЕЙ СИ ЕС ЕООД';

  constructor(private translate: TranslateService) {
    // Задаване на поддържаните езици
    translate.addLangs(['bg', 'en', 'ru']);
    // Задаване на език по подразбиране
    translate.setDefaultLang('bg');
    // Използване на език от localStorage или подразбиране
    const savedLang = localStorage.getItem('language') || 'bg';
    translate.use(savedLang);
    // Дебъг: Логиране на текущия език
    console.log('Current language:', savedLang);
    // Дебъг: Проверка дали преводите се зареждат
    translate.get('sidebar.home').subscribe((res: string) => {
      console.log('Translation for sidebar.home:', res);
    }, (err: any) => {
      console.error('Translation error:', err);
    });
  }

  ngOnInit(): void {}

  changeLanguage(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
    console.log(`Selected language: ${lang}`);
  }
}