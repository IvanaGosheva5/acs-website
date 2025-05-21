import { Component, OnInit, OnDestroy } from '@angular/core';
   import { CommonModule } from '@angular/common';
   import { TranslateModule } from '@ngx-translate/core';

   @Component({
     selector: 'app-home',
     standalone: true,
     imports: [CommonModule, TranslateModule],
     templateUrl: './home.component.html',
     styleUrls: ['./home.component.css']
   })
   export class HomeComponent implements OnInit, OnDestroy {
     slides = [
       { image: 'assets/images/slide1.jpg', caption: 'home.slide1_caption' },
       { image: 'assets/images/slide2.jpg', caption: 'home.slide2_caption' },
       { image: 'assets/images/slide3.jpg', caption: 'home.slide3_caption' }
     ];
     currentSlide = 0;
     private autoSlideInterval: any;

     ngOnInit() {
       this.startAutoSlide();
     }

     ngOnDestroy() {
       this.stopAutoSlide();
     }

     startAutoSlide() {
       this.autoSlideInterval = setInterval(() => {
         this.currentSlide = (this.currentSlide + 1) % this.slides.length;
       }, 5000);
     }

     stopAutoSlide() {
       if (this.autoSlideInterval) {
         clearInterval(this.autoSlideInterval);
       }
     }

     goToSlide(index: number) {
       this.currentSlide = index;
       this.stopAutoSlide();
       this.startAutoSlide();
     }
   }