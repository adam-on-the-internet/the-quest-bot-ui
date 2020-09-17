import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ROUTES_ENUM } from "../constants/routing.constants";

@Injectable({
  providedIn: "root"
})
export class NavHelperService {

  constructor(
    private router: Router,
  ) { }

  public goToDashboard(): void {
    this.goToRoute(ROUTES_ENUM.Dashboard);
  }

  public goToInfo(): void {
    this.goToRoute(ROUTES_ENUM.Info);
  }

  public goToProfile(): void {
    this.goToRoute(ROUTES_ENUM.Profile);
  }

  public goToAdmin(): void {
    this.goToRoute(ROUTES_ENUM.Admin);
  }

  public goToLogin(): void {
    this.goToRoute(ROUTES_ENUM.Login);
  }

  // PROJECTS

  public goBookmarks(): void {
    this.goToRoute(ROUTES_ENUM.Bookmarks);
  }

  public goBookmarkOverview(): void {
    this.goToRoute(ROUTES_ENUM.BookmarkOverview);
  }

  public goToBookmarkDetails(id: string): void {
    this.goToRoutes([ROUTES_ENUM.BookmarkOverview, id]);
  }

  public goToBookmarkCreateForm(): void {
    this.goToRoute(ROUTES_ENUM.BookmarkForm);
  }

  public goToBookmarkEditForm(id: string): void {
    this.goToRoutes([ROUTES_ENUM.BookmarkForm, id]);
  }

  // GENERAL

  private goToRoute(route: string): void {
    this.goToRoutes([route]);
  }

  private goToRoutes(routes: string[]): void {
    this.router.navigate(routes);
  }
}
