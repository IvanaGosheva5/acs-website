import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchQuery: string = '';
  languages: string[] = ['bg', 'en', 'ru'];
  selectedLanguage: string;
  isMenuOpen: boolean = false;

  constructor(private translate: TranslateService) {
    this.selectedLanguage = translate.currentLang || 'bg';
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.selectedLanguage = lang;
  }

  onSearch() {
    if (this.searchQuery.trim()) {
      console.log('Search query:', this.searchQuery);
      // Добави логика за търсене тук (напр. навигиране до страница с резултати)
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}