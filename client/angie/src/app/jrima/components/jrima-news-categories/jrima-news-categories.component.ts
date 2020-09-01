import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jrima-news-categories',
  templateUrl: './jrima-news-categories.component.html',
  styleUrls: ['./jrima-news-categories.component.css']
})
export class JrimaNewsCategoriesComponent implements OnInit {

  url = 'admin/news_categories';
  title = 'News Categories';
  headers = ['News title', 'Categorie Title'];
  objectKeys = ['id', 'news_title', 'categorie_title'];

  constructor() { }

  ngOnInit() {
  }

}
