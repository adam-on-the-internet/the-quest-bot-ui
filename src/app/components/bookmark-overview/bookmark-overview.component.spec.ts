import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BookmarkOverviewComponent } from "./bookmark-overview.component";
import { HeaderComponent } from "../header/header.component";
import { CardComponent } from "../card/card.component";
import { BookmarkTableComponent } from "../bookmark-table/bookmark-table.component";
import { BodyComponent } from "../body/body.component";
import { LoadingComponent } from "../loading/loading.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("BookmarkOverviewComponent", () => {
  let component: BookmarkOverviewComponent;
  let fixture: ComponentFixture<BookmarkOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookmarkOverviewComponent, HeaderComponent, CardComponent, BookmarkTableComponent,
        BodyComponent, LoadingComponent
      ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
