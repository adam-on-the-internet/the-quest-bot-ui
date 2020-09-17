import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BodyAltComponent } from "./body-alt.component";

describe("BodyAltComponent", () => {
  let component: BodyAltComponent;
  let fixture: ComponentFixture<BodyAltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyAltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
