import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jrima-movie-genres',
  templateUrl: './jrima-movie-genres.component.html',
  styleUrls: ['./jrima-movie-genres.component.css']
})
export class JrimaMovieGenresComponent implements OnInit {

  url = 'admin/movie_genres';
  title = 'Movie Genres';
  headers = ['Movie Name', 'Genre Name'];
  objectKeys = ['id', 'movie_name', 'genre_name'];

  constructor() { }

  ngOnInit() {
  }

}
