import {Component, OnInit} from "@angular/core";
import {LogService} from "./services/log.service";
import {HeroService} from "./services/hero.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
    title = "the-quest-bot-ui";

    constructor(
        private logService: LogService,
        private heroService: HeroService,
    ) {
    }

    public ngOnInit() {
        this.logStart();
        this.heroService.load();
    }

    private logStart() {
        this.logService.log("info", "application visited").subscribe();
    }
}
