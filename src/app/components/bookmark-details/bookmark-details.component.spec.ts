import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BookmarkDetailsComponent } from "./bookmark-details.component";
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";
import { LoadingComponent } from "../loading/loading.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("BookmarkDetailsComponent", () => {
  let component: BookmarkDetailsComponent;
  let fixture: ComponentFixture<BookmarkDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookmarkDetailsComponent, HeaderComponent, BodyComponent,
        LoadingComponent
      ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
