import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [],
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.css'
})
export class KanbanComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    console.log('KanbanComponent initialized');
  }
}
