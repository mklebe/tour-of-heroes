import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Hero } from '../hero';
import { HeroSearchService } from '../services/hero-search.service';

@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers: [ HeroSearchService ]
})
export class HeroSearchComponent implements OnInit {
  
  heroes: Observable <Hero[]>;

  private searchTerms = new Subject<string>();

  constructor(
    private router: Router,
    private heroSearchService: HeroSearchService
  ) { }

  search( term: string ): void{
    this.searchTerms.next( term );
  }

  ngOnInit() {
    this.heroes = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap( term => term
        ? this.heroSearchService.search( term )
        : Observable.of<Hero[]>())
      .catch( error => {
        console.log( error );
        return Observable.of<Hero[]>([]);
      })
  }

  gotoDetail( hero: Hero ): void {
    let link = ['/detail', hero.id];
    this.router.navigate( link );
  }
}
