import { TestBed } from "@angular/core/testing";

import { BookmarkService } from "./bookmark.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("BookmarkService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it("should be created", () => {
    const service: BookmarkService = TestBed.get(BookmarkService);
    expect(service).toBeTruthy();
  });
});
