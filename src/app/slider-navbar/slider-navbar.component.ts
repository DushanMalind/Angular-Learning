import { Component } from '@angular/core';
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
export class SliderNavbarComponent {

}
