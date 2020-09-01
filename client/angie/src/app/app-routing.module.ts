import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { MoviesComponent } from './modules/movies/movies.component';
import { TheatresComponent } from './modules/theatres/theatres.component';
import { NewsComponent } from './modules/news/news.component';
import { SessionComponent } from './modules/session/session.component';
import { MoviePreviewComponent } from './modules/movie_preview/movie_preview.component';
import { NewsDetailComponent } from './modules/news-detail/news-detail.component';
import { JrimamovieComponent } from './jrima/components/jrimamovie/jrimamovie.component';
import { JrimaactorsComponent } from './jrima/components/jrimaactors/jrimaactors.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { JrimacategoriesComponent } from './jrima/components/jrimacategories/jrimacategories.component';
import { JrimagenresComponent } from './jrima/components/jrimagenres/jrimagenres.component';
import { JrimanewsComponent } from './jrima/components/jrimanews/jrimanews.component';
import { JrimausersComponent } from './jrima/components/jrimausers/jrimausers.component';
import { JrimatheatresComponent } from './jrima/components/jrimatheatres/jrimatheatres.component';
import { JrimashowtimesComponent } from './jrima/components/jrimashowtimes/jrimashowtimes.component';
import { JrimaShowtimeUsersComponent } from './jrima/components/jrima-showtime-users/jrima-showtime-users.component';
import { JrimaRolesComponent } from './jrima/components/jrima-roles/jrima-roles.component';
import { JrimaNewsCategoriesComponent } from './jrima/components/jrima-news-categories/jrima-news-categories.component';
import { JrimaMovieActorsComponent } from './jrima/components/jrima-movie-actors/jrima-movie-actors.component';
import { JrimaActorRolesComponent } from './jrima/components/jrima-actor-roles/jrima-actor-roles.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: MoviePreviewComponent },
  { path: 'theatres', component: TheatresComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/:id', component: NewsDetailComponent },
  { path: 'sign_in', component: SessionComponent },
  { path: 'admin/movies', component: JrimamovieComponent, canActivate: [AuthGuard]},
  { path: 'admin/actors', component: JrimaactorsComponent, canActivate: [AuthGuard]},
  { path: 'admin/categories', component: JrimacategoriesComponent, canActivate: [AuthGuard]},
  { path: 'admin/genres', component: JrimagenresComponent, canActivate: [AuthGuard]},
  { path: 'admin/news', component: JrimanewsComponent, canActivate: [AuthGuard]},
  { path: 'admin/users', component: JrimausersComponent, canActivate: [AuthGuard]},
  { path: 'admin/theatres', component: JrimatheatresComponent, canActivate: [AuthGuard]},
  { path: 'admin/showtimes', component: JrimashowtimesComponent, canActivate: [AuthGuard]},
  { path: 'admin/showtime_users', component: JrimaShowtimeUsersComponent, canActivate: [AuthGuard]},
  { path: 'admin/roles', component: JrimaRolesComponent, canActivate: [AuthGuard]},
  { path: 'admin/news_categories', component: JrimaNewsCategoriesComponent, canActivate: [AuthGuard]},
  { path: 'admin/movie_actors', component: JrimaMovieActorsComponent, canActivate: [AuthGuard]},
  { path: 'admin/actor_roles', component: JrimaActorRolesComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
