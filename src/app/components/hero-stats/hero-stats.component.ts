import {Component} from "@angular/core";
import {HeroService} from "../../services/hero.service";

@Component({
    selector: "app-hero-stats",
    templateUrl: "./hero-stats.component.html",
    styleUrls: ["./hero-stats.component.scss"]
})
export class HeroStatsComponent {

    public get stats() {
        return this.heroService.heroStats;
    }

    public get ready(): boolean {
        return this.heroService.retrievedHeroStats;
    }

    constructor(
        private heroService: HeroService,
    ) {
    }

}
