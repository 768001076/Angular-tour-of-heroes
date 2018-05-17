import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeroService {

  constructor(
    private messageServie: MessageService,
    private http: HttpClient
  ) { }
  getHeros(): Observable<Hero[]> {
    this.messageServie.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    this.messageServie.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
  getHerosHttp(): Observable<Hero[]> {
    return this.http.get<Hero[]>('http://localhost:8525/angular/getHeroes');
  }

}

