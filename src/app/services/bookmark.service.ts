import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RestUrlBuilder } from "../utilities/rest-url-builder.util";
import { ServiceUrl } from "../constants/rest.constants";
import { Bookmark } from "../models/Bookmark.model";
import { CookieHelper } from "../utilities/cookie.util";

const controller = "bookmark";

@Injectable({
  providedIn: "root"
})
export class BookmarkService {
  constructor(
    private http: HttpClient,
  ) { }

  public getAll(): Observable<Bookmark[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<Bookmark[]>;
  }

  public getSingle(id: string): Observable<Bookmark> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      params: id,
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<Bookmark>;
  }

  public create(bookmark: Bookmark): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.post(url, bookmark, CookieHelper.authHeaders) as Observable<any>;
  }

  public update(bookmark: any): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.put(url, bookmark, CookieHelper.authHeaders) as Observable<any>;
  }

  public delete(id: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      params: id,
    });
    return this.http.delete(url, CookieHelper.authHeaders) as Observable<any>;
  }
}
