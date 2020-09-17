import {Component} from "@angular/core";
import {NavHelperService} from "src/app/services/nav-helper.service";
import {HeroService} from "../../services/hero.service";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent {

    public get ready(): boolean {
        return this.heroService.ready;
    }

    public get heroes(): any[] {
        return this.heroService.allHeroes;
    }

    constructor(
        private navHelper: NavHelperService,
        private heroService: HeroService,
    ) {
    }

    public goToInfo() {
        this.navHelper.goToInfo();
    }

}
