import {
  Component,
  AfterViewInit,
  ContentChild
} from "@angular/core";

import { TabsContainerComponent } from "./tab-container-component/tab-container-component";
import { BodyContainerComponent } from "./body-container-component/body-container-component";
import { TabContentComponent } from "./tab-content-component/tab-content-component";

/**
 * Holds tabs container and body container
 */
@Component({
  selector: "tab-control",
  templateUrl: "./tab-component.html",
  host: {},
  styleUrls: ["./tab-component.css"]
})
export class TabComponent implements AfterViewInit {

  @ContentChild(TabsContainerComponent)
  public tabsContainer: TabsContainerComponent;
  @ContentChild(BodyContainerComponent)
  public bodyContainer: BodyContainerComponent;

  ngOnInit(): void {
    
  }

  public OnTabClickEvent = (tab: TabContentComponent) => {
    if (tab.showTab == undefined) return;
    this.bodyContainer.hideAllContent();
    this.bodyContainer.showContentByID(tab.showTab);
    this.tabsContainer.SetAllTabsInactive();
    tab.isActiveTab = true;
  };

  public ShowTab = (tabID: string) => {
    this.bodyContainer.hideAllContent();
    this.tabsContainer.SetAllTabsInactive();
    const tab = this.tabsContainer.tabs.find(t => t.tabID == tabID);
    const body = this.bodyContainer.bodies.find(b => b.tabID == tab.showTab);
    tab.isActiveTab = true;
    body.showContent();
  };

  public hideAllBodies() {
    this.bodyContainer.bodies.forEach(b => b.hideContent());
  }

  ngAfterViewInit(): void {
    this.tabsContainer.TabChangeEvent.subscribe((tab: TabContentComponent) => {
      this.OnTabClickEvent(tab);
    });
  }
}
