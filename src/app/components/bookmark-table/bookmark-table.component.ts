import { Component, OnInit, Input } from "@angular/core";
import { Bookmark } from "src/app/models/Bookmark.model";
import { CookieHelper } from "src/app/utilities/cookie.util";
import { BookmarkService } from "src/app/services/bookmark.service";
import { NavHelperService } from "src/app/services/nav-helper.service";

@Component({
  selector: "app-bookmark-table",
  templateUrl: "./bookmark-table.component.html",
  styleUrls: ["./bookmark-table.component.scss"]
})
export class BookmarkTableComponent implements OnInit {
  @Input() public management = true;

  public bookmarks: Bookmark[] = null;
  public error = false;

  public get canEdit(): boolean {
    return this.management && CookieHelper.admin;
  }

  public get ready(): boolean {
    return this.bookmarks !== null;
  }

  public get hasBookmark(): boolean {
    return this.bookmarks.length > 0;
  }

  constructor(
    private bookmarkService: BookmarkService,
    private navHelper: NavHelperService,
  ) { }

  public ngOnInit() {
    this.load();
  }

  public goDetails(bookmark: Bookmark): void {
    this.navHelper.goToBookmarkDetails(bookmark._id);
  }

  public goCreate(): void {
    this.navHelper.goToBookmarkCreateForm();
  }

  public goEdit(bookmark: Bookmark): void {
    this.navHelper.goToBookmarkEditForm(bookmark._id);
  }

  public requestDelete(bookmark: Bookmark): void {
    const confirmDelete = confirm(`Are you sure you want to delete ${bookmark.name}?`);
    if (confirmDelete) {
      this.delete(bookmark);
    }
  }

  private delete(bookmark: Bookmark): void {
    this.bookmarkService.delete(bookmark._id)
      .subscribe((res) => this.bookmarks = res,
        (error) => {
          console.log("delete bookmark failed");
        }, () => {
          this.load();
        });
  }

  private load(): void {
    this.bookmarks = null;
    this.error = false;
    this.bookmarkService.getAll()
      .subscribe((res) => this.bookmarks = res,
        (error) => {
          this.error = true;
          console.log("get bookmarks failed");
        });
  }

}
