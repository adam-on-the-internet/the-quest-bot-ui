import { Component, OnInit } from "@angular/core";
import { Bookmark } from "src/app/models/Bookmark.model";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { ActivatedRoute } from "@angular/router";
import { BookmarkService } from "src/app/services/bookmark.service";
import { NavHelperService } from "src/app/services/nav-helper.service";

@Component({
  selector: "app-bookmark-form",
  templateUrl: "./bookmark-form.component.html",
  styleUrls: ["./bookmark-form.component.scss"]
})
export class BookmarkFormComponent implements OnInit {
  public bookmark: Bookmark = null;
  public showErrors = false;

  public get title(): string {
    if (this.editMode) {
      return "Edit Bookmark";
    }
    return "Create Bookmark";
  }

  public get errors(): string[] {
    const myErrors = [];
    if (this.nameInvalid) {
      myErrors.push("Please provide a name.");
    }
    if (this.linkInvalid) {
      myErrors.push("Please provide a link.");
    }
    return myErrors;
  }

  public get valid(): boolean {
    return this.errors.length === 0;
  }

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.bookmark);
  }

  public get editMode(): boolean {
    return this.ready && BooleanHelper.hasValue(this.bookmark._id);
  }

  private get nameInvalid(): boolean {
    return !BooleanHelper.hasValue(this.bookmark.name);
  }

  private get linkInvalid(): boolean {
    return !BooleanHelper.hasValue(this.bookmark.url);
  }

  constructor(
    private route: ActivatedRoute,
    private bookmarkService: BookmarkService,
    private navHelper: NavHelperService,
  ) { }

  public ngOnInit() {
    this.setupForm();
  }

  public submit() {
    this.showErrors = true;
    if (this.valid) {
      this.save();
    }
  }

  private save() {
    if (this.editMode) {
      this.runEdit();
    } else {
      this.runCreate();
    }
  }

  private runEdit() {
    let response;
    this.bookmarkService.update(this.bookmark)
      .subscribe((res) => response = res,
        (error) => {
          console.log("update bookmark failed");
        }, () => {
          this.navHelper.goBookmarkOverview();
        });
  }

  private runCreate() {
    let response;
    console.log(this.bookmark);
    this.bookmarkService.create(this.bookmark)
      .subscribe((res) => response = res,
        (error) => {
          console.log("create bookmark failed");
        }, () => {
          this.navHelper.goBookmarkOverview();
        });
  }

  private setupForm() {
    const urlId = this.route.snapshot.paramMap.get("id");
    if (BooleanHelper.notNull(urlId)) {
      this.setupEditForm(urlId);
    } else {
      this.setupCreateForm();
    }
  }

  private setupEditForm(id: string): void {
    this.bookmarkService.getSingle(id)
      .subscribe((res) => this.bookmark = res,
        (error) => {
          console.log("get bookmark failed");
        });
  }

  private setupCreateForm(): void {
    this.bookmark = {
      name: null,
      url: null,
      type: null,
      order: null,
      _id: null,
    };
  }

}
