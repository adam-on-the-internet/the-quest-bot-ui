import {Component} from "@angular/core";
import {HeroService} from "../../services/hero.service";
import {World} from "../../models/World.model";

@Component({
    selector: "app-world",
    templateUrl: "./world.component.html",
    styleUrls: ["./world.component.scss"]
})
export class WorldComponent {

    public get world(): World {
        return this.heroService.heroWorld;
    }

    public get ready(): boolean {
        return this.heroService.retrievedHeroWorld;
    }

    constructor(
        private heroService: HeroService,
    ) {
    }

}
