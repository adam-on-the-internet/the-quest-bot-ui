import {Injectable} from "@angular/core";
import {HeroStats} from "../models/HeroStats.model";
import {Hero} from "../models/Hero.model";

@Injectable({
    providedIn: "root"
})
export class HeroService {
    public currentHero: Hero = null;
    public fallenHeroes: Hero[] = null;
    public heroStats: HeroStats = null;

    public get ready(): boolean {
        return this.fallenHeroes !== null &&
            this.currentHero !== null &&
            this.heroStats !== null;
    }

    public clearValues(): void {
        this.fallenHeroes = null;
        this.currentHero = null;
        this.heroStats = null;
    }
}
