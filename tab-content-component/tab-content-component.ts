import { Component, Input, Output, EventEmitter } from "@angular/core";

/**
 * Containers All Tabs
 */

@Component({
  selector: "tab-content",
  templateUrl: "./tab-content-component.html",
  styleUrls: ["./tab-content-component.css"]
})
export class TabContentComponent {
  @Input()
  public tabID: string;

  @Input()
  public showTab: string;

  @Input()
  public float: string = "right";

  @Input()
  public isActiveTab: boolean;

  @Input()
  public canInvoke: boolean = true;

  @Output()
  public tabClicked: EventEmitter<TabContentComponent>;

  public tabClick = () => {
    if (this.canInvoke == true) {
      this.tabClicked.emit(this);
    }
  };

  public get tabClasses() {
    return [this.float, this.isActiveTab ? "active" : ""];
  }
}
