import {Injectable} from "@angular/core";
import {HeroStats} from "../models/HeroStats.model";
import {Hero} from "../models/Hero.model";
import {World} from "../models/World.model";

@Injectable({
    providedIn: "root"
})
export class HeroService {
    public currentHero: Hero = null;
    public fallenHeroes: Hero[] = null;
    public heroStats: HeroStats = null;
    public heroWorld: World = null;

    public retrievedFallenHeroes = false;
    public retrievedCurrentHero = false;
    public retrievedHeroStats = false;
    public retrievedHeroWorld = false;

    public get ready(): boolean {
        return this.retrievedCurrentHero &&
            this.retrievedFallenHeroes &&
            this.retrievedHeroStats &&
            this.retrievedHeroWorld;
    }

    public clearValues(): void {
        this.fallenHeroes = null;
        this.currentHero = null;
        this.heroStats = null;
        this.heroWorld = null;
        this.retrievedFallenHeroes = false;
        this.retrievedCurrentHero = false;
        this.retrievedHeroStats = false;
        this.retrievedHeroWorld = false;
    }
}
