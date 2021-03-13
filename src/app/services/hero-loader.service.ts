import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RestUrlBuilder} from "../utilities/rest-url-builder.util";
import {ServiceUrl} from "../constants/rest.constants";
import {CookieHelper} from "../utilities/cookie.util";
import {HeroService} from "./hero.service";
import {Hero} from "../models/Hero.model";
import {QuestBotStats} from "../models/HeroStats.model";
import {World} from "../models/World.model";

const controller = "quest";

@Injectable({
    providedIn: "root"
})
export class HeroLoaderService {

    constructor(
        private http: HttpClient,
        private heroService: HeroService,
    ) {
    }

    public load(): void {
        this.heroService.clearValues();
        this.loadCurrentHero();
        this.loadFallenHeroes();
        this.loadHeroStats();
        this.loadHeroWorld();
    }

    public throwItem(item: string): Observable<any> {
        const url = RestUrlBuilder.buildRestUrl({
            service: ServiceUrl.BasicExpress,
            controller,
            collection: "path/" + item,
        });
        return this.http.post(url, null, CookieHelper.authHeaders) as Observable<any>;
    }

    private loadCurrentHero() {
        this.getCurrentHero()
            .subscribe((res) => this.heroService.currentHero = res,
                (error) => {
                    console.log("get current hero failed");
                }, () => {
                    this.heroService.retrievedCurrentHero = true;
                });
    }

    private loadFallenHeroes() {
        this.getFallenHeroes()
            .subscribe((res) => this.heroService.fallenHeroes = res,
                (error) => {
                    console.log("get fallen heroes failed");
                }, () => {
                    this.heroService.retrievedFallenHeroes = true;
                });
    }

    private loadHeroStats() {
        this.getHeroStats()
            .subscribe((res) => this.heroService.heroStats = res,
                (error) => {
                    console.log("get hero stats failed");
                }, () => {
                    this.heroService.retrievedHeroStats = true;
                });
    }

    private loadHeroWorld() {
        this.getHeroWorld()
            .subscribe((res) => this.heroService.heroWorld = res,
                (error) => {
                    console.log("get hero world failed");
                }, () => {
                    this.heroService.retrievedHeroWorld = true;
                });
    }

    private getCurrentHero(): Observable<Hero> {
        const url = RestUrlBuilder.buildRestUrl({
            service: ServiceUrl.BasicExpress,
            controller,
            collection: "currentHero",
        });
        return this.http.get(url, CookieHelper.authHeaders) as Observable<Hero>;
    }

    private getFallenHeroes(): Observable<Hero[]> {
        const url = RestUrlBuilder.buildRestUrl({
            service: ServiceUrl.BasicExpress,
            controller,
            collection: "fallenHeroes",
        });
        return this.http.get(url, CookieHelper.authHeaders) as Observable<Hero[]>;
    }

    private getHeroStats(): Observable<QuestBotStats> {
        const url = RestUrlBuilder.buildRestUrl({
            service: ServiceUrl.BasicExpress,
            controller,
            collection: "heroStats",
        });
        return this.http.get(url, CookieHelper.authHeaders) as Observable<QuestBotStats>;
    }

    private getHeroWorld(): Observable<World> {
        const url = RestUrlBuilder.buildRestUrl({
            service: ServiceUrl.BasicExpress,
            controller,
            collection: "world",
        });
        return this.http.get(url, CookieHelper.authHeaders) as Observable<World>;
    }
}
