import {Component, OnInit} from "@angular/core";
import {LogService} from "./services/log.service";
import {HeroLoaderService} from "./services/hero-loader.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
    title = "the-quest-bot-ui";

    constructor(
        private logService: LogService,
        private heroLoaderService: HeroLoaderService,
    ) {
    }

    public ngOnInit() {
        this.logStart();
        this.heroLoaderService.load();
    }

    private logStart() {
        this.logService.log("info", "application visited").subscribe();
    }
}
