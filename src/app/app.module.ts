import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//main component
import { AppComponent } from './app.component';

//components
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';

//services
import { HeroService } from './services/hero/hero.service'

const ROUTES = [
  /*{
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full'
  },*/
  {
    path: 'heroes',
    component: HeroesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
