import { TestBed } from "@angular/core/testing";

import { HeroLoaderService } from "./hero-loader.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe("HeroLoaderService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it("should be created", () => {
    const service: HeroLoaderService = TestBed.get(HeroLoaderService);
    expect(service).toBeTruthy();
  });
});
