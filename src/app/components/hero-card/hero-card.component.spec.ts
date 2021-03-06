import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {HeroCardComponent} from "./hero-card.component";
import {CardComponent} from "../card/card.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe("HeroCardComponent", () => {
    let component: HeroCardComponent;
    let fixture: ComponentFixture<HeroCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeroCardComponent, CardComponent],
            imports: [HttpClientTestingModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
