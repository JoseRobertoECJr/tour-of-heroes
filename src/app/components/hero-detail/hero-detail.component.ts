import { Component, Input } from '@angular/core';
import { HeroService } from './../../services/hero/hero.service'
import { Hero } from './../../models/hero/hero';


@Component({
    selector: 'hero-detail',
    styleUrls: [`./../../app.component.css`],
    templateUrl: './hero-detail.component.html',
})

export class HeroDetailComponent{
    @Input()
    hero: Hero;
}
