import {Component} from "@angular/core";
import {AdminService} from "../../services/admin.service";

@Component({
    selector: "app-admin",
    templateUrl: "./admin.component.html",
    styleUrls: ["./admin.component.css"]
})
export class AdminComponent {

    constructor(
        private adminService: AdminService,
    ) {
    }

    public deleteAllHeroes() {
        this.adminService.deleteAllHeroes();
    }

    public advanceHero() {
        this.adminService.advanceHero();
    }
}
