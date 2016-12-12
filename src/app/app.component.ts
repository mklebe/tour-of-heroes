import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'mk-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ HeroService ]
})

export class AppComponent implements OnInit{
  ngOnInit(): void {}

  title = 'Tour of Heroes';
}
