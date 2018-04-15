import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';
import { Heroe } from '../heroe';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Heroe;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) { }

  ngOnInit(): void {

    this.getHero();

  }

  getHero(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    // + operator parse string to number
    // The route.snapshot is a static image of the route information shortly
    // after the component was created.
    // The paramMap is a dictionary of route parameter values extracted from the
    // URL. The "id" key returns the id of the hero to fetch.
    this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }

  goBack() {
    this.location.back();
  }
}
