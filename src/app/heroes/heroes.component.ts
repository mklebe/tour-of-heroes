import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'mk-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [ HeroService ]
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  constructor( 
    private heroService: HeroService,
    private router: Router 
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate( ['/detail', this.selectedHero.id] );
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
