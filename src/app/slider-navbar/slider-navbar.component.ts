import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-slider-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './slider-navbar.component.html',
  styleUrl: './slider-navbar.component.css'
})
export class SliderNavbarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    console.log('SliderNavbarComponent initialized');
  }

}
