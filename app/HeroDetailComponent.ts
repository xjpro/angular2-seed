import {Component, View} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroService} from './HeroService';

@Component({})
@View({
    directives: ROUTER_DIRECTIVES,
    template: `
    <div>
        <a [routerLink]="['HeroList']">Back to heroes list</a>
    </div>
	<h1>{{hero.name}}</h1>
	<p>
	    This is the hero page for {{hero.name}}!
	</p>
`
})
export class HeroDetailComponent {
    public hero;

    constructor(private _heroService:HeroService, private _routeParams:RouteParams) {
        this.hero = _heroService.heroes[_routeParams.params['id']];
    }
}

