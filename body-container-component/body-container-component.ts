import {
  Component,
  ViewChildren,
  QueryList,
  ContentChildren,
  AfterViewInit
} from "@angular/core";
import { TabBodyContentComponent } from "../body-content-component/tab-body-container-component";

@Component({
  selector: "body-container",
  templateUrl: "./body-container-component.html",
  styleUrls: ["./body-container-component.css"]
})
export class BodyContainerComponent implements AfterViewInit {
  @ContentChildren(TabBodyContentComponent)
  bodies: QueryList<TabBodyContentComponent>;

  public hideAllContent = () => {
    this.bodies.forEach(b => b.hideContent());
  };

  public showContentByID = (tabID: string) => {
    if (tabID == null) return;
    const content = this.bodies.find(b => b.tabID == tabID);
    if (content != null) {
      content.showContent();
    }
  };
  ngAfterViewInit(): void {
    const defaultTab = this.bodies.find(b => b.default == true);
    if (defaultTab != undefined) {
      defaultTab.visible = true;
    }
  }
}
