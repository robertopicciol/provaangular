import { Component, OnInit } from '@angular/core';
import {News} from '../model/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  listanews: News[] = [];
  constructor() {
    this.listanews.push({id: 1, titolo: 'Titolo notizia 1', desc: 'Descrizione 1'});
    this.listanews.push({id: 2, titolo: 'Titolo notizia 2', desc: 'Descrizione 2'});
    this.listanews.push({id: 3, titolo: 'Titolo notizia 3', desc: 'Descrizione 3'});
  }

  ngOnInit() {
  }

}
