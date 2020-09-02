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
import { JrimaUserRolesComponent } from './jrima/components/jrima-user-roles/jrima-user-roles.component';
import { JrimaEditMoviesComponent } from './jrima/components/jrima-edit-movies/jrima-edit-movies.component';
import { JrimaEditMovieActorsComponent } from './jrima/components/jrima-edit-movie-actors/jrima-edit-movie-actors.component';
import { JrimaEditActorsComponent } from './jrima/components/jrima-edit-actors/jrima-edit-actors.component';
import { JrimaEditUserRolesComponent } from './jrima/components/jrima-edit-user-roles/jrima-edit-user-roles.component';
import { JrimaEditCategoriesComponent } from './jrima/components/jrima-edit-categories/jrima-edit-categories.component';
import { JrimaEditGenresComponent } from './jrima/components/jrima-edit-genres/jrima-edit-genres.component';
import { JrimaEditNewsComponent } from './jrima/components/jrima-edit-news/jrima-edit-news.component';
import { JrimaEditNewsCategoriesComponent } from './jrima/components/jrima-edit-news-categories/jrima-edit-news-categories.component';
import { JrimaEditUsersComponent } from './jrima/components/jrima-edit-users/jrima-edit-users.component';
import { JrimaEditRolesComponent } from './jrima/components/jrima-edit-roles/jrima-edit-roles.component';
import { JrimaEditShowtimeUsersComponent } from './jrima/components/jrima-edit-showtime-users/jrima-edit-showtime-users.component';
import { JrimaEditShowtimesComponent } from './jrima/components/jrima-edit-showtimes/jrima-edit-showtimes.component';
import { JrimaEditTheatresComponent } from './jrima/components/jrima-edit-theatres/jrima-edit-theatres.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { AdminGuard } from './shared/guards/admin.guard';
import { JrimaEditMovieGenresComponent } from './jrima/components/jrima-edit-movie-genres/jrima-edit-movie-genres.component';
import { JrimaMovieGenresComponent } from './jrima/components/jrima-movie-genres/jrima-movie-genres.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: MoviePreviewComponent },
  { path: 'theatres', component: TheatresComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/:id', component: NewsDetailComponent },
  { path: 'sign_in', component: SessionComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'admin/movies', component: JrimamovieComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/movies/new', component: JrimaEditMoviesComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/movies/:id', component: JrimaEditMoviesComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/actors', component: JrimaactorsComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/actors/new', component: JrimaEditActorsComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/actors/:id', component: JrimaEditActorsComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/categories', component: JrimacategoriesComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/categories/new', component: JrimaEditCategoriesComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/categories/:id', component: JrimaEditCategoriesComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/genres', component: JrimagenresComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/genres/new', component: JrimaEditGenresComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/genres/:id', component: JrimaEditGenresComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/news', component: JrimanewsComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/news/new', component: JrimaEditNewsComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/news/:id', component: JrimaEditNewsComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/users', component: JrimausersComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/users/new', component: JrimaEditUsersComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/users/:id', component: JrimaEditUsersComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/theatres', component: JrimatheatresComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/theatres/new', component: JrimaEditTheatresComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/theatres/:id', component: JrimaEditTheatresComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/showtimes', component: JrimashowtimesComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/showtimes/new', component: JrimaEditShowtimesComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/showtimes/:id', component: JrimaEditShowtimesComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/showtime_users', component: JrimaShowtimeUsersComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/showtime_users/new', component: JrimaEditShowtimeUsersComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/showtime_users/:id', component: JrimaEditShowtimeUsersComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/roles', component: JrimaRolesComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/roles/new', component: JrimaEditRolesComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/roles/:id', component: JrimaEditRolesComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/news_categories', component: JrimaNewsCategoriesComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/news_categories/new', component: JrimaEditNewsCategoriesComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/news_categories/:id', component: JrimaEditNewsCategoriesComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/movie_actors', component: JrimaMovieActorsComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/movie_actors/new', component: JrimaEditMovieActorsComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/movie_actors/:id', component: JrimaEditMovieActorsComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/movie_genres', component: JrimaMovieGenresComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/movie_genres/new', component: JrimaEditMovieGenresComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/movie_genres/:id', component: JrimaEditMovieGenresComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/user_roles', component: JrimaUserRolesComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/user_roles/new', component: JrimaEditUserRolesComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin/user_roles/:id', component: JrimaEditUserRolesComponent, canActivate: [AuthGuard, AdminGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
