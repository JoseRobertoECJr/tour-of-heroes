//core
import { Component, OnInit } from '@angular/core';

//models
import { Hero } from './../../models/hero/hero';

//components
import { HeroDetailComponent } from './../hero-detail/hero-detail.component';

//services
import { HeroService } from './../../services/hero/hero.service';

@Component({
    selector: 'heroes',
    styleUrls: ['./heroes.component.css'],
    templateUrl: './heroes.component.html',
})

export class HeroesComponent implements OnInit{

    title: string = 'Heroes';
    selectedHero: Hero;
    heroes: Hero[];

    constructor(private heroService: HeroService){

    }

    ngOnInit() {
        // Retrieve heroes from the API
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void{
        this.selectedHero = hero;
    }


    delete(hero: Hero): void{
        this.heroService
        .deleteHero(hero._id)
        .then(() => {
            this.heroes = this.heroes.filter(h => h!== hero);
            if(this.selectedHero === hero){ this.selectedHero = null; }
        });
    }

}
