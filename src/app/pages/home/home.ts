import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  currentSlide = 0;

  slides = [
    'assets/3.jpg',
    'assets/iso.jpg',
    'assets/shutterstock_711168088.jpg'
  ];

  private intervalId: any;

  ngOnInit(): void {
    this.startSlider();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startSlider(): void {
    this.intervalId = setInterval(() => {
      this.currentSlide =
        (this.currentSlide + 1) % this.slides.length;
    }, 3000);
  }
}