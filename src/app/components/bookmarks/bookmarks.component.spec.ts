import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BookmarksComponent } from "./bookmarks.component";
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";
import { CardComponent } from "../card/card.component";
import { LoadingComponent } from "../loading/loading.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { BookmarkTableComponent } from "../bookmark-table/bookmark-table.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("BookmarksComponent", () => {
  let component: BookmarksComponent;
  let fixture: ComponentFixture<BookmarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookmarksComponent, HeaderComponent, BodyComponent, CardComponent, LoadingComponent,
        BookmarkTableComponent
      ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
