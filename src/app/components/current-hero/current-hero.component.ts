import {Component} from "@angular/core";
import {HeroService} from "../../services/hero.service";
import {Hero} from "../../models/Hero.model";

@Component({
    selector: "app-current-hero",
    templateUrl: "./current-hero.component.html",
    styleUrls: ["./current-hero.component.scss"]
})
export class CurrentHeroComponent {
    public get ready(): boolean {
        return this.heroService.ready;
    }

    public get currentHero(): Hero {
        return this.heroService.currentHero;
    }

    constructor(
        private heroService: HeroService,
    ) {
    }

}
