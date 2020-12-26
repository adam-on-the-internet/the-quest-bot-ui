import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {WorldComponent} from "./world.component";
import {CardComponent} from "../card/card.component";
import {BodyComponent} from "../body/body.component";
import {LoadingComponent} from "../loading/loading.component";

describe("WorldComponent", () => {
    let component: WorldComponent;
    let fixture: ComponentFixture<WorldComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WorldComponent, CardComponent, BodyComponent, LoadingComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WorldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
