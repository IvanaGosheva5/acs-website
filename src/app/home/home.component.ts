import { Component, AfterViewInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
declare var $: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    $('.carousel').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      arrows: true,
      fade: true
    });
  }
}