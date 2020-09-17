import { Component } from "@angular/core";
import { NavHelperService } from "src/app/services/nav-helper.service";
import { Application } from "src/app/models/Application.model";
import { ApplicationService } from "src/app/services/application.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent {

  public get apps(): Application[] {
    return this.appService.currentApps;
  }

  constructor(
    private navHelper: NavHelperService,
    private appService: ApplicationService,
  ) { }

  public goToInfo() {
    this.navHelper.goToInfo();
  }

  public goBookmarks() {
    this.navHelper.goBookmarks();
  }

}
