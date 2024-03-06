import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{

  constructor() {

  }

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

}
