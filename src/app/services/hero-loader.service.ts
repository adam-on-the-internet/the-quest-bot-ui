import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RestUrlBuilder} from "../utilities/rest-url-builder.util";
import {ServiceUrl} from "../constants/rest.constants";
import {CookieHelper} from "../utilities/cookie.util";
import {HeroService} from "./hero.service";

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
    }

    private loadCurrentHero() {
        this.getCurrentHero()
            .subscribe((res) => this.heroService.currentHero = res,
                (error) => {
                    console.log("get current hero failed");
                });
    }

    private loadFallenHeroes() {
        this.getFallenHeroes()
            .subscribe((res) => this.heroService.fallenHeroes = res,
                (error) => {
                    console.log("get fallen heroes failed");
                });
    }

    private loadHeroStats() {
        this.getHeroStats()
            .subscribe((res) => this.heroService.heroStats = res,
                (error) => {
                    console.log("get hero stats failed");
                });
    }

    private getCurrentHero(): Observable<any> {
        const url = RestUrlBuilder.buildRestUrl({
            service: ServiceUrl.NonProdExpress,
            controller,
            collection: "currentHero",
        });
        return this.http.get(url, CookieHelper.authHeaders) as Observable<any>;
    }

    private getFallenHeroes(): Observable<any> {
        const url = RestUrlBuilder.buildRestUrl({
            service: ServiceUrl.NonProdExpress,
            controller,
            collection: "fallenHeroes",
        });
        return this.http.get(url, CookieHelper.authHeaders) as Observable<any>;
    }

    private getHeroStats(): Observable<any> {
        const url = RestUrlBuilder.buildRestUrl({
            service: ServiceUrl.NonProdExpress,
            controller,
            collection: "heroStats",
        });
        return this.http.get(url, CookieHelper.authHeaders) as Observable<any>;
    }
}
