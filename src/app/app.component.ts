//core
import { Component, OnInit } from '@angular/core';

//models
import { Hero } from './models/hero/hero';

//components
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

//services
import { HeroService } from './services/hero/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  newHeroName: string = '';
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService){

  }

  ngOnInit() {
      // Retrieve heroes from the API
      this.heroService.getHeroes().subscribe(heroes => {
        this.heroes = heroes;
      });
    }


  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  createHero(name: string): void{
    this.heroService.createHero(name).subscribe(hero => {
      this.heroes.push(hero);
    });
    this.newHeroName = '';
  }

}
