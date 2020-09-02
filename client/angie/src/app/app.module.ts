import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Angular2TokenService } from 'angular2-token';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { MoviesComponent } from './modules/movies/movies.component';
import { TheatresComponent } from './modules/theatres/theatres.component';
import { NewsComponent } from './modules/news/news.component';
import { SessionComponent } from './modules/session/session.component';
import { StateService } from './core/services/state.service';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MoviePreviewComponent } from './modules/movie_preview/movie_preview.component';
import { NewsDetailComponent } from './modules/news-detail/news-detail.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SearchComponent } from './components/search/search.component';
import { JrimamovieComponent } from './jrima/components/jrimamovie/jrimamovie.component';
import { JrimaactorsComponent } from './jrima/components/jrimaactors/jrimaactors.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { AdminGuard } from './shared/guards/admin.guard';
import { JrimacategoriesComponent } from './jrima/components/jrimacategories/jrimacategories.component';
import { JrimagenresComponent } from './jrima/components/jrimagenres/jrimagenres.component';
import { JrimanewsComponent } from './jrima/components/jrimanews/jrimanews.component';
import { ListComponent } from './shared/list/list.component';
import { JrimausersComponent } from './jrima/components/jrimausers/jrimausers.component';
import { JrimatheatresComponent } from './jrima/components/jrimatheatres/jrimatheatres.component';
import { JrimashowtimesComponent } from './jrima/components/jrimashowtimes/jrimashowtimes.component';
import { JrimaShowtimeUsersComponent } from './jrima/components/jrima-showtime-users/jrima-showtime-users.component';
import { JrimaRolesComponent } from './jrima/components/jrima-roles/jrima-roles.component';
import { JrimaNewsCategoriesComponent } from './jrima/components/jrima-news-categories/jrima-news-categories.component';
import { JrimaMovieActorsComponent } from './jrima/components/jrima-movie-actors/jrima-movie-actors.component';
import { JrimaActorRolesComponent } from './jrima/components/jrima-actor-roles/jrima-actor-roles.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { JrimaEditMoviesComponent } from './jrima/components/jrima-edit-movies/jrima-edit-movies.component';
import { FormComponent } from './shared/form/form.component';
import { JrimaEditMovieActorsComponent } from './jrima/components/jrima-edit-movie-actors/jrima-edit-movie-actors.component';
import { JrimaEditActorsComponent } from './jrima/components/jrima-edit-actors/jrima-edit-actors.component';
import { JrimaEditActorRolesComponent } from './jrima/components/jrima-edit-actor-roles/jrima-edit-actor-roles.component';
import { JrimaEditCategoriesComponent } from './jrima/components/jrima-edit-categories/jrima-edit-categories.component';
import { JrimaEditGenresComponent } from './jrima/components/jrima-edit-genres/jrima-edit-genres.component';
import { JrimaEditNewsComponent } from './jrima/components/jrima-edit-news/jrima-edit-news.component';
import { JrimaEditNewsCategoriesComponent } from './jrima/components/jrima-edit-news-categories/jrima-edit-news-categories.component';
import { JrimaEditUsersComponent } from './jrima/components/jrima-edit-users/jrima-edit-users.component';
import { JrimaEditTheatresComponent } from './jrima/components/jrima-edit-theatres/jrima-edit-theatres.component';
import { JrimaEditShowtimesComponent } from './jrima/components/jrima-edit-showtimes/jrima-edit-showtimes.component';
import { JrimaEditShowtimeUsersComponent } from './jrima/components/jrima-edit-showtime-users/jrima-edit-showtime-users.component';
import { JrimaEditRolesComponent } from './jrima/components/jrima-edit-roles/jrima-edit-roles.component';
import { ProfileComponent } from './modules/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    MoviesComponent,
    TheatresComponent,
    NewsComponent,
    SessionComponent,
    CarouselComponent,
    MoviePreviewComponent,
    NewsDetailComponent,
    CategoriesComponent,
    SearchComponent,
    JrimamovieComponent,
    JrimaactorsComponent,
    JrimacategoriesComponent,
    JrimagenresComponent,
    JrimanewsComponent,
    ListComponent,
    JrimausersComponent,
    JrimatheatresComponent,
    JrimashowtimesComponent,
    JrimaShowtimeUsersComponent,
    JrimaRolesComponent,
    JrimaNewsCategoriesComponent,
    JrimaMovieActorsComponent,
    JrimaActorRolesComponent,
    JrimaEditMoviesComponent,
    FormComponent,
    JrimaEditMovieActorsComponent,
    JrimaEditActorsComponent,
    JrimaEditActorRolesComponent,
    JrimaEditCategoriesComponent,
    JrimaEditGenresComponent,
    JrimaEditNewsComponent,
    JrimaEditNewsCategoriesComponent,
    JrimaEditUsersComponent,
    JrimaEditTheatresComponent,
    JrimaEditShowtimesComponent,
    JrimaEditShowtimeUsersComponent,
    JrimaEditRolesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule
  ],
  providers: [
    StateService,
    Angular2TokenService,
    AuthGuard,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
