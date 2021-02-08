import { Injectable } from '@angular/core';
import { from, of, Observable } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    //TODO: send the msg _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes')
    return of(HEROES);
  }

  constructor( private messageService: MessageService ) { }
}
