import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { DashboardComponent } from './../components/dashboard/dashboard.component';
import { HeroesComponent } from './../components/heroes/heroes.component';
import { HeroDetailComponent } from './../components/hero-detail/hero-detail.component';
import { AddHeroComponent } from './../components/add-hero/add-hero.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'hero-detail/:id',
        component: HeroDetailComponent
    },
    {
        path: 'add-hero',
        component: AddHeroComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule{

}
