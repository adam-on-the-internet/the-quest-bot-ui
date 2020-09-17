import {Component, Input} from "@angular/core";
import {Hero} from "../../models/Hero.model";

@Component({
    selector: "app-hero-card",
    templateUrl: "./hero-card.component.html",
    styleUrls: ["./hero-card.component.scss"]
})
export class HeroCardComponent {
    @Input() public hero: Hero = null;

    public get heroTitle(): string {
        return `${this.hero.name} Lvl. ${this.hero.level}`;
    }

    public get heroSubtitle(): string {
        return this.hero.hpText;
    }

    public get hasHero(): boolean {
        return this.hero !== null;
    }
}
