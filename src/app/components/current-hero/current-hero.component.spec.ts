import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {CurrentHeroComponent} from "./current-hero.component";
import {BodyComponent} from "../body/body.component";
import {HeaderComponent} from "../header/header.component";
import {CardComponent} from "../card/card.component";
import {HeroCardComponent} from "../hero-card/hero-card.component";
import {LoadingComponent} from "../loading/loading.component";

describe("CurrentHeroComponent", () => {
    let component: CurrentHeroComponent;
    let fixture: ComponentFixture<CurrentHeroComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CurrentHeroComponent, BodyComponent, HeaderComponent, CardComponent,
                HeroCardComponent, LoadingComponent,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CurrentHeroComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
