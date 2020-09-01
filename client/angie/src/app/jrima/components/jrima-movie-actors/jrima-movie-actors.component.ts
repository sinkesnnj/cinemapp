import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jrima-movie-actors',
  templateUrl: './jrima-movie-actors.component.html',
  styleUrls: ['./jrima-movie-actors.component.css']
})
export class JrimaMovieActorsComponent implements OnInit {

  url = 'admin/movie_actors';
  title = 'Movie Actors';
  headers = ['Movie Name', 'Actor Name', 'Character Name'];
  objectKeys = ['id', 'movie_name', 'actor_name', 'character_name'];

  constructor() { }

  ngOnInit() {
  }

}
