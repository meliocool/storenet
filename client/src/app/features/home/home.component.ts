import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  features = [
    {
      icon: '✓',
      title: 'Authentic Figures',
      description: 'Official licensed products from trusted manufacturers',
    },
    {
      icon: '🚚',
      title: 'Secure Shipping',
      description: 'Protected packaging and reliable delivery worldwide',
    },
    {
      icon: '💰',
      title: 'Best Prices',
      description: 'Competitive pricing with regular special offers',
    },
  ];

  carouselImages = [
    'assets/images/golshi.webp',
    'assets/images/jeanne.webp',
    'assets/images/nazuna.webp',
    'assets/images/tenka.webp',
  ];

  currentSlide = 0;
  private carouselInterval: any;

  currentYear = new Date().getFullYear();

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    this.stopCarousel();
  }

  startCarousel() {
    this.carouselInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  stopCarousel() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselImages.length;
  }

  prevSlide() {
    this.currentSlide =
      this.currentSlide === 0 ? this.carouselImages.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
