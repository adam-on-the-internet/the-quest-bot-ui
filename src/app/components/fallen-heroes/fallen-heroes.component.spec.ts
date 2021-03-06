import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {FallenHeroesComponent} from "./fallen-heroes.component";
import {BodyComponent} from "../body/body.component";
import {HeaderComponent} from "../header/header.component";
import {CardComponent} from "../card/card.component";
import {LoadingComponent} from "../loading/loading.component";
import {RouterTestingModule} from "@angular/router/testing";

describe("FallenHeroesComponent", () => {
    let component: FallenHeroesComponent;
    let fixture: ComponentFixture<FallenHeroesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                FallenHeroesComponent, BodyComponent, HeaderComponent, CardComponent,
                LoadingComponent
            ],
            imports: [RouterTestingModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FallenHeroesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
