import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Hero } from './../../models/hero/hero';

@Injectable()
export class HeroService{

    constructor(private http: Http) { }

    // Get all heroes from the API
    getHeroes(): Observable<Hero[]> {
        return this.http.get('/api/heroes')
        .map(res => res.json());
    }

    createHero(name: string) {

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post('api/heroes', { name }, options)
        .map(res => res.json());
    }

    getHero(id): Observable<Hero> {
        return this.http.get('/api/heroes/' + id )
        .map(res => res.json());
    }

}
