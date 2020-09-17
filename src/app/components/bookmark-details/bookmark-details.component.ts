import { Component, OnInit } from "@angular/core";
import { Bookmark } from "src/app/models/Bookmark.model";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { BookmarkService } from "src/app/services/bookmark.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-bookmark-details",
  templateUrl: "./bookmark-details.component.html",
  styleUrls: ["./bookmark-details.component.scss"]
})
export class BookmarkDetailsComponent implements OnInit {
  public bookmark: Bookmark = null;

  public get ready(): boolean {
    return BooleanHelper.notNull(this.bookmark);
  }

  constructor(
    private bookmarkService: BookmarkService,
    private route: ActivatedRoute,
  ) { }

  public ngOnInit() {
    this.loadApp();
  }

  private loadApp(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.bookmarkService.getSingle(id)
      .subscribe((res) => this.bookmark = res,
        (error) => {
          console.log("get bookmark failed");
        });
  }

}
