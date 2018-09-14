import { Component, Input } from "@angular/core";

@Component({
  selector: "tab-body-content",
  templateUrl: "./tab-body-container-component.html",
  styleUrls: ["./tab-body-container-component.css"]
})
export class TabBodyContentComponent {
  @Input()
  public tabID: string;

  @Input()
  public default: boolean = false;

  public visible: boolean = false;

  public showContent = () => {
    this.visible = true;
  };

  public hideContent = () => {
    this.visible = false;
  };
}
