import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
    JrimaActorRolesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    StateService,
    Angular2TokenService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
