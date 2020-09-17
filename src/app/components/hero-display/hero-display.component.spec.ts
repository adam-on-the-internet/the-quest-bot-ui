import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {HeroDisplayComponent} from "./hero-display.component";
import {HeaderComponent} from "../header/header.component";
import {BodyComponent} from "../body/body.component";
import {CardComponent} from "../card/card.component";
import {HeroCardComponent} from "../hero-card/hero-card.component";
import {LoadingComponent} from "../loading/loading.component";
import {RouterTestingModule} from "@angular/router/testing";

describe("HeroDisplayComponent", () => {
    let component: HeroDisplayComponent;
    let fixture: ComponentFixture<HeroDisplayComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HeroDisplayComponent, HeaderComponent, BodyComponent, CardComponent,
                HeroCardComponent, LoadingComponent
            ],
            imports: [RouterTestingModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroDisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
