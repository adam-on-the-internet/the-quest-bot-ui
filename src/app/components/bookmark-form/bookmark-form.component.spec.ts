import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BookmarkFormComponent } from "./bookmark-form.component";
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";
import { CardComponent } from "../card/card.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule } from "@angular/forms";
import { LoadingComponent } from "../loading/loading.component";

describe("BookmarkFormComponent", () => {
  let component: BookmarkFormComponent;
  let fixture: ComponentFixture<BookmarkFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookmarkFormComponent, HeaderComponent, BodyComponent, CardComponent,
        LoadingComponent
      ],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
