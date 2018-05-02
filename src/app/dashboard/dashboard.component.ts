///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
   this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeros().subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

}
