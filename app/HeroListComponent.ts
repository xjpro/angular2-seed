import {Component, View} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroService} from './HeroService';
import {HeroDetailComponent} from './HeroDetailComponent';

@Component({})
@View({
    directives: [HeroDetailComponent].concat(ROUTER_DIRECTIVES),
    template: `
    <h1>Heroes</h1>
	<ul>
		<li *ngFor="#hero of heroes">
			<a [routerLink]="['HeroDetail', {id: hero.id}]">{{hero.name}}</a>
		</li>
	</ul>
`
})
export class HeroListComponent {
    public heroes;

    constructor(private _heroService:HeroService) {
        this.heroes = _heroService.heroes;
    }
}
