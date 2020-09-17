import { Component, Input } from "@angular/core";
import { BooleanHelper } from "src/app/utilities/boolean.util";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent {
  @Input() public title: string = null;
  @Input() public subtitle: string = null;
  @Input() public icon: string = null;
  @Input() public autoHeight = true;
  @Input() public imageUrl: string = null;

  public get hasImage(): boolean {
    return BooleanHelper.hasValue(this.imageUrl);
  }

  public get hasSubtitle(): boolean {
    return BooleanHelper.hasValue(this.subtitle);
  }

  public get hasTitle(): boolean {
    return BooleanHelper.hasValue(this.title);
  }

  public get hasIcon(): boolean {
    return BooleanHelper.hasValue(this.icon);
  }
}
