import {Component, Input} from "@angular/core";
import {Hero, SpecialMove} from "../../models/Hero.model";
import {BooleanHelper} from "../../utilities/boolean.util";
import {HeroLoaderService} from "../../services/hero-loader.service";

@Component({
    selector: "app-hero-card",
    templateUrl: "./hero-card.component.html",
    styleUrls: ["./hero-card.component.scss"]
})
export class HeroCardComponent {
    @Input() public hero: Hero = null;

    public showFullMessage = false;

    public itemsToThrow = [
        {name: "APPLE", description: "+5 hp"},
        {name: "SNAKE", description: "-5 hp"},
        {name: "BOX", description: "+/- 10 hp"},
        {name: "MUSHROOM", description: "A decent offense..."},
        {name: "ARMOR", description: "A decent defense..."},
        {name: "BOOTS", description: "Good for travelling..."},
        {name: "ORB", description: "Good for reflection..."},
        {name: "AMULET", description: "Might be cursed..."},
        {name: "BANDAGE", description: "Helpful for healing..."},
    ];

    public get pathOccupied(): boolean {
        return this.hero.path !== null;
    }

    public get heroTitle(): string {
        return `${this.hero.name} ~ Lvl. ${this.hero.level} ~ ${this.hero.race.toLowerCase()} ~ ${this.hero.alignment.toLowerCase()}`;
    }

    public get heroSubtitle(): string {
        const distanceText = BooleanHelper.hasValue(this.hero.distanceText) ? `${this.hero.distanceText} ~` : "";
        let subtitleText = `${this.hero.hpText} ~ ${distanceText} ${this.hero.expText} ~ ${this.hero.age} updates`;
        if (this.hero.conditions && this.hero.conditions.length > 0) {
            const conditionText = this.conditionText;
            subtitleText += ` ~ ${conditionText}`
        }
        return subtitleText;
    }

    private get conditionText(): string {
        let conditionText = " ~ CONDITIONS: ";
        this.hero.conditions.forEach((condition, i) => {
            if (i > 0) {
                conditionText += ", ";
            }
            conditionText += " " + condition;
        });
        return conditionText;
    }

    public get hasHero(): boolean {
        return this.hero !== null;
    }

    public get recentUpdate(): string {
        return this.removeNoteFromUpdate(this.hero.announcement);
    }

    constructor(
        private heroLoaderService: HeroLoaderService,
    ) {
    }

    public abbreviateJournalMessage(message: string) {
        if (this.showFullMessage) {
            return message;
        }
        return this.removeNoteFromUpdate(message);
    }

    public throwItemInPath(item: string): void {
        let response;
        this.heroLoaderService.throwItem(item)
            .subscribe((res) => response = res,
            () => {
                console.log(1);
            },
            () => {
                console.log(2);
                this.heroLoaderService.load();
            });
    }

    public setFullMessage(show: boolean): void {
        this.showFullMessage = show;
    }

    public displayType(move: SpecialMove): string {
        return move.type
            .replace(/_/g, " ")
            .replace(
                /\w\S*/g, (txt) => {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                }
            );
    }

    public removeNoteFromUpdate(update) {
        const noteStart = update.indexOf("(" + this.hero.name);
        return update.slice(0, noteStart);
    }
}
