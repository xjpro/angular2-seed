import {Component, View} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroService} from './HeroService';
import {HeroListComponent} from './HeroListComponent';
import {HeroDetailComponent} from './HeroDetailComponent';

@Component({
    selector: 'app',
    viewProviders: [HeroService]
})
@View({
    directives: ROUTER_DIRECTIVES,
    template: `
	<router-outlet></router-outlet>
`
})
@RouteConfig([
    {path: '/hero', component: HeroListComponent, name: 'HeroList', useAsDefault: true},
    {path: '/hero/:id', component: HeroDetailComponent, name: 'HeroDetail'}
])
export class AppComponent {
    constructor() {
    }
}
