import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {HeroStatsComponent} from "./hero-stats.component";
import {BodyComponent} from "../body/body.component";
import {HeaderComponent} from "../header/header.component";
import {CardComponent} from "../card/card.component";
import {LoadingComponent} from "../loading/loading.component";

describe("HeroStatsComponent", () => {
    let component: HeroStatsComponent;
    let fixture: ComponentFixture<HeroStatsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HeroStatsComponent, BodyComponent, HeaderComponent, CardComponent,
                LoadingComponent,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroStatsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
