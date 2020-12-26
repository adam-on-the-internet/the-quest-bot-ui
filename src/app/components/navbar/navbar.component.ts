import {Component} from "@angular/core";
import {NavHelperService} from "src/app/services/nav-helper.service";
import {CookieHelper} from "src/app/utilities/cookie.util";
import {AdminService} from "../../services/admin.service";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {

    public get isLoggedIn(): boolean {
        return CookieHelper.isLoggedOn;
    }

    public get isAdmin(): boolean {
        return CookieHelper.getUserDetails().admin;
    }

    constructor(
        private navHelper: NavHelperService,
        private adminService: AdminService,
    ) {
    }

    public goToDashboard(): void {
        this.navHelper.goToDashboard();
    }

    public goToCurrentHero() {
        this.navHelper.goToCurrentHero();
    }

    public goToWorld() {
        this.navHelper.goToWorld();
    }

    public goToFallenHeroes() {
        this.navHelper.goToFallenHeroes();
    }

    public goToHeroStats() {
        this.navHelper.goToHeroStats();
    }

    public goToProfile(): void {
        this.navHelper.goToProfile();
    }

    public goToAdmin(): void {
        this.navHelper.goToAdmin();
    }

    public advance(): void {
        this.adminService.advanceHero();
    }

    public logout(): void {
        CookieHelper.removeToken();
        this.navHelper.goToLogin();
    }
}
