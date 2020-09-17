import {Injectable} from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class HeroService {
    public fallenHeroes: any = null;
    public currentHero: any = null;
    public heroStats: any = null;

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
