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

    gotoHeroes(): void{
        let link = '/heroes';
        this.router.navigateByUrl(link);
    }

    gotoDashboard(): void{
        let link = '/dashboard';
        this.router.navigateByUrl(link);
    }

    createHero(name: string): void{
        name.trim();
        if(name){
            this.heroService.createHero(name).then(hero => {
                this.gotoHeroes();
            });
        }
    }
}
