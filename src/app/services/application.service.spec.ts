import { TestBed } from "@angular/core/testing";

import { ApplicationService } from "./application.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("ApplicationService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it("should be created", () => {
    const service: ApplicationService = TestBed.get(ApplicationService);
    expect(service).toBeTruthy();
  });
});
