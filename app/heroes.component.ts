import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
  selector: 'my-heroes',
  directives: [HeroDetailComponent],
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css']
})
export class HeroesComponent implements OnInit { 
	public title = 'Tour of Heroes';
	
	public hero: Hero = {
		id: 1,
		name: 'Windstorm'
	};

  public heroes: Hero[];

  public selectedHero: Hero;

  constructor(private _heroService: HeroService, private _router: Router) {

  }

  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero; 
  }

  ngOnInit() {
    this.getHeroes();
  }

  gotoDetail() {
      this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}

