import {Component} from "@angular/core";
import {RouterLink, RouterLinkActive, Routes} from '@angular/router';

/*@Component({
  selector: 'app-navbar',
  template: '<h1>Nav Bar</h1>',
  standalone: true,
  styles:[`h1{color:blue; font-size: 45px}h1:hover{color:red;cursor: pointer}`]

})*/

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent{
title = 'My First Angular App';
}

