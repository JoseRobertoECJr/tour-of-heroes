import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

//services
import { HeroService } from './../../services/hero/hero.service';

//models
import { Hero } from './../../models/hero/hero';

@Component({
    selector: 'mini-detail',
    styleUrls: ['./mini-detail.component.css'],
    templateUrl: './mini-detail.component.html',
})

export class MiniDetailComponent{

    @Input()
    hero: Hero;

    constructor(private router: Router,
                private heroService: HeroService){

    }

    gotoDetail():void{
        this.router.navigate(['/hero-detail', this.hero._id]);
    }
}
