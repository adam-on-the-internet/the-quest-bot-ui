import {Component} from "@angular/core";
import {HeroService} from "../../services/hero.service";
import {Hero} from "../../models/Hero.model";
import {NavHelperService} from "../../services/nav-helper.service";

@Component({
    selector: "app-fallen-heroes",
    templateUrl: "./fallen-heroes.component.html",
    styleUrls: ["./fallen-heroes.component.scss"]
})
export class FallenHeroesComponent {
    public get ready(): boolean {
        return this.heroService.ready;
    }

    public get fallenHeroes(): Hero[] {
        return this.heroService.fallenHeroes;
    }

    constructor(
        private heroService: HeroService,
        private navHelperService: NavHelperService,
    ) {
    }

    public goToHeroDisplay(hero: Hero) {
        this.navHelperService.goToHeroDisplay(hero._id);
    }

}
