import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Hero } from './../../models/hero/hero';

@Injectable()
export class HeroService{

    constructor(private http: Http) { }

      // Get all heroes from the API
      getAllHeroes() {
        return this.http.get('/api/heroes')
          .map(res => res.json());
      }

/*
    getHeroes(): void{//Hero[]{
        //return HEROES;
    }
*/
}
