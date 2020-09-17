import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RestUrlBuilder} from "../utilities/rest-url-builder.util";
import {ServiceUrl} from "../constants/rest.constants";
import {CookieHelper} from "../utilities/cookie.util";

const controller = "quest";

@Injectable({
    providedIn: "root"
})
export class HeroService {
    public allHeroes: any = null;

    public get ready(): boolean {
        return this.allHeroes !== null;
    }

    constructor(
        private http: HttpClient,
    ) {
    }

    public load(): void {
        this.allHeroes = null;
        this.getAllHeroes()
            .subscribe((res) => this.allHeroes = res,
                (error) => {
                    console.log("get all heroes failed");
                });
    }

    private getAllHeroes(): Observable<any> {
        const url = RestUrlBuilder.buildRestUrl({
            service: ServiceUrl.NonProdExpress,
            controller,
            collection: "heroes",
        });
        console.log(url);
        return this.http.get(url, CookieHelper.authHeaders) as Observable<any>;
    }
}
