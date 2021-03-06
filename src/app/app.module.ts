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
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MiniDetailComponent } from './components/mini-detail/mini-detail.component';
import { AddHeroComponent } from './components/add-hero/add-hero.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';

//services
import { HeroService } from './services/hero/hero.service'

//modules
import { AppRoutingModule } from './modules/app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent,
        MiniDetailComponent,
        AddHeroComponent,
        HeroSearchComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule { }
