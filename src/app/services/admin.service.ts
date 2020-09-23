import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RestUrlBuilder} from "../utilities/rest-url-builder.util";
import {ServiceUrl} from "../constants/rest.constants";
import {CookieHelper} from "../utilities/cookie.util";
import {HeroLoaderService} from "./hero-loader.service";

const controller = "quest";

@Injectable({
    providedIn: "root"
})
export class AdminService {

    constructor(
        private http: HttpClient,
        private heroLoader: HeroLoaderService,
    ) {
    }

    public deleteAllHeroes() {
        let response;
        this.submitDelete()
            .subscribe((res) => response = res,
                (error) => {
                    console.log("delete failed");
                }, () => {
                    this.heroLoader.load();
                    console.log(response);
                });
    }

    public advanceHero() {
        let response;
        this.submitAdvance()
            .subscribe((res) => response = res,
                (error) => {
                    console.log("advance failed");
                }, () => {
                    this.heroLoader.load();
                    console.log(response);
                });
    }

    private submitDelete(): Observable<any> {
        const url = RestUrlBuilder.buildRestUrl({
            service: ServiceUrl.NonProdExpress,
            controller,
            collection: "all",
        });
        return this.http.delete(url, CookieHelper.authHeaders) as Observable<any>;
    }

    private submitAdvance(): Observable<any> {
        const url = RestUrlBuilder.buildRestUrl({
            service: ServiceUrl.NonProdExpress,
            controller,
            collection: "advanceCurrentHero",
        });
        return this.http.post(url, null, CookieHelper.authHeaders) as Observable<any>;
    }
}
