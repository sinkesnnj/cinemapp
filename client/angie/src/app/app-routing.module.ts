import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { MoviesComponent } from './modules/movies/movies.component';
import { TheatresComponent } from './modules/theatres/theatres.component';
import { NewsComponent } from './modules/news/news.component';
import { SessionComponent } from './modules/session/session.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'theatres', component: TheatresComponent },
  { path: 'news', component: NewsComponent },
  { path: 'sign_in', component: SessionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
