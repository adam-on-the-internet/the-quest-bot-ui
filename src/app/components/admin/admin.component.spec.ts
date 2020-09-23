import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {AdminComponent} from "./admin.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {HeaderComponent} from "../header/header.component";
import {BodyComponent} from "../body/body.component";
import {LoadingComponent} from "../loading/loading.component";
import {CardComponent} from "../card/card.component";

describe("AdminComponent", () => {
    let component: AdminComponent;
    let fixture: ComponentFixture<AdminComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AdminComponent, HeaderComponent, BodyComponent, LoadingComponent, CardComponent
            ],
            imports: [HttpClientTestingModule, RouterTestingModule],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
