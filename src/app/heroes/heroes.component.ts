import { Component, OnInit } from '@angular/core';
import { Heroe } from '../heroe'
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes : Heroe[];
  constructor( private heroService: HeroService ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes as Heroe[]);
    }

}
