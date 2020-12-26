import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {ROUTES_ENUM} from "../constants/routing.constants";

@Injectable({
    providedIn: "root"
})
export class NavHelperService {

    constructor(
        private router: Router,
    ) {
    }

    public goToDashboard(): void {
        this.goToRoute(ROUTES_ENUM.Dashboard);
    }

    public goToCurrentHero(): void {
        this.goToRoute(ROUTES_ENUM.CurrentHero);
    }

    public goToFallenHeroes(): void {
        this.goToRoute(ROUTES_ENUM.FallenHeroes);
    }

    public goToHeroDisplay(id: string): void {
        this.goToRoutes([ROUTES_ENUM.HeroDisplay, id]);
    }

    public goToHeroStats(): void {
        this.goToRoute(ROUTES_ENUM.HeroStats);
    }

    public goToWorld(): void {
        this.goToRoute(ROUTES_ENUM.World);
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

    // GENERAL

    private goToRoute(route: string): void {
        this.goToRoutes([route]);
    }

    private goToRoutes(routes: string[]): void {
        this.router.navigate(routes);
    }
}
