import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Hero } from './../../models/hero/hero';

@Injectable()
export class HeroService{

    heroesApiUrl: string = 'api/heroes/';


    constructor(private http: Http) { }

    // Get all heroes from the API
    getHeroes(): Promise<Hero[]>{ //Observable<Hero[]> {
        return this.http.get(this.heroesApiUrl)
        .toPromise()
        .then(res => res.json() as Hero[])
        .catch(this.handleError);

        //return this.http.get('/api/heroes')
        //.map(res => res.json());
    }

    createHero(name: string) {

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(this.heroesApiUrl, { name }, options)
        .map(res => res.json());
    }

    getHero(id: string): Promise<Hero> {//Observable<Hero> {
        return this.http.get(this.heroesApiUrl + id)
        .toPromise()
        .then(res => res.json() as Hero)
        .catch(this.handleError);

        //return this.http.get('/api/heroes/' + id )
        //.map(res => res.json());
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
