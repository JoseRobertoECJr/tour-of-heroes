import { Component, OnInit } from '@angular/core';

//models
import { Hero } from './../../models/hero/hero';

//services
import{ HeroService } from './../../services/hero/hero.service';

@Component({
    selector: 'dashboard',
    styleUrls: ['./dashboard.component.css'],
    templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit{
    title: string = "Top Heroes";
    heroes: Hero[] = [];

    constructor(private heroService: HeroService){

    }

    ngOnInit(): void{

        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }

}
