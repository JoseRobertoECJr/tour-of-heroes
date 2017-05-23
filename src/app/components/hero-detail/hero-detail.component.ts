import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/SwitchMap';
//services
import { HeroService } from './../../services/hero/hero.service'

//models
import { Hero } from './../../models/hero/hero';


@Component({
    selector: 'hero-detail',
    styleUrls: [`./hero-detail.component.css`],
    templateUrl: './hero-detail.component.html',
})

export class HeroDetailComponent implements OnInit{
    @Input()
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location){

    }

    ngOnInit():void{
        this.route.params
        .switchMap((params: Params) =>
        this.heroService.getHero(params['id']))
        .subscribe(hero => this.hero = hero);
    }

    goBack(): void{
        this.location.back();
    }

    save():void {
        this.heroService.updateHero(this.hero)
        .then(() =>this.goBack());
    }

}
