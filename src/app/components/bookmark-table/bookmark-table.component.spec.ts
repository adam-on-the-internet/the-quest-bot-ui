import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BookmarkTableComponent } from "./bookmark-table.component";
import { HeaderComponent } from "../header/header.component";
import { CardComponent } from "../card/card.component";
import { LoadingComponent } from "../loading/loading.component";
import { BodyComponent } from "../body/body.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("BookmarkTableComponent", () => {
  let component: BookmarkTableComponent;
  let fixture: ComponentFixture<BookmarkTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent, CardComponent, BookmarkTableComponent,
        BodyComponent, LoadingComponent
      ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
