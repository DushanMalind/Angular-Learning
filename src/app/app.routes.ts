import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {PostComponent} from "./post/post.component";
import {EventComponent} from "./event/event.component";
import {FromComponent} from "./from/from.component";
import {SliderNavbarComponent} from "./slider-navbar/slider-navbar.component";
import {DashboardComponent} from "./sliderNavComponent/dashboard/dashboard.component";
import {KanbanComponent} from "./sliderNavComponent/kanban/kanban.component";

export const routes: Routes = [
  { path: 'home', 'title': "Home", component: HomeComponent },
  { path: 'about', 'title': "About", component: AboutComponent },
  { path: 'contact', 'title': "contact", component: PostComponent },
  { path: 'event', 'title': "Event", component: EventComponent },
  { path: 'from', 'title': "From", component: FromComponent },
  { path: 'slider', 'title': "From", component: SliderNavbarComponent,
    children: [
      {path: 'dashboard', data: {title: 'Dashboard'}, component: DashboardComponent},
      {path: 'kanban', data: {title: 'Dashboard'}, component: KanbanComponent},
    ]},
  { path: '', redirectTo: "/home", pathMatch: "full" },
  {path: '**', component: PageNotFoundComponent}
];

