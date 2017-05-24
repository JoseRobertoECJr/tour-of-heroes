import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HeroService } from './../../services/hero/hero.service';

@Component({
    selector: 'add-hero',
    styleUrls: ['./add-hero.component.css'],
    templateUrl: './add-hero.component.html',
})

export class AddHeroComponent{

    title: string = "Add a hero";

    constructor(private heroService: HeroService,
                private router: Router){

    }

    goHeroes(): void{
        this.router.navigateByUrl('/heroes');
    }

    goDashboard(): void{
        this.router.navigateByUrl('/dashboard');
    }

    createHero(name: string): void{
        name.trim();
        if(name){
            this.heroService.createHero(name).then(hero => {
                this.goHeroes();
            });
        }
    }
}
