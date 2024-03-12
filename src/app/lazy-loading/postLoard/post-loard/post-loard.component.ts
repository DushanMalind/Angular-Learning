import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-post-loard',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './post-loard.component.html',
  styleUrl: './post-loard.component.css'
})
export class PostLoardComponent {
  loadingCards=new Array(3);
}
