import {Component, Input} from "@angular/core";
import {Hero, SpecialMove} from "../../models/Hero.model";
import {BooleanHelper} from "../../utilities/boolean.util";

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
        const distanceText = BooleanHelper.hasValue(this.hero.distanceText) ? `${this.hero.distanceText} |` : "";
        return `${this.hero.hpText} | ${distanceText} ${this.hero.age} updates | ${this.hero.expPoints} exp`;
    }

    public get hasHero(): boolean {
        return this.hero !== null;
    }

    public get recentUpdateText(): string {
        return this.hero.storyOver ? "In Memoriam" : "Recent Update";
    }

    public get recentUpdate(): string {
        return this.removeNoteFromUpdate(this.hero.announcement);
    }

    public displayType(move: SpecialMove): string {
        return move.type
            .replace(/_/g, ' ')
            .replace(
                /\w\S*/g,
                function (txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                }
            );
    }

    public removeNoteFromUpdate(update) {
        const noteStart = update.indexOf("(" + this.hero.name);
        return update.slice(0, noteStart);
    }
}
