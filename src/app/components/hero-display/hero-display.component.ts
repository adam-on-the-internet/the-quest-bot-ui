import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../../services/hero.service";
import {Hero} from "../../models/Hero.model";
import {BooleanHelper} from "../../utilities/boolean.util";

@Component({
    selector: "app-hero-display",
    templateUrl: "./hero-display.component.html",
    styleUrls: ["./hero-display.component.scss"]
})
export class HeroDisplayComponent implements OnInit {
    private heroId: string = null;

    public get ready(): boolean {
        return this.heroService.ready && BooleanHelper.hasValue(this.selectedHero);
    }

    public get selectedHero(): Hero {
        if (!this.heroService.ready) {
            return null;
        }
        return this.heroService.fallenHeroes.find((hero) => {
            return hero._id === this.heroId;
        });
    }

    constructor(
        private route: ActivatedRoute,
        private heroService: HeroService,
    ) {
    }

    public ngOnInit() {
        this.heroId = this.route.snapshot.paramMap.get("id");
    }

}
