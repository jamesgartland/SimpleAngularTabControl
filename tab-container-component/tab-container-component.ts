import {
  Component,
  ViewChildren,
  QueryList,
  Output,
  EventEmitter,
  OnInit,
  AfterViewInit,
  ContentChildren
} from "@angular/core";
import { TabContentComponent } from "../tab-content-component/tab-content-component";
import { TabComponent } from "../tab-component";

@Component({
  selector: "tabs-container",
  templateUrl: "./tab-container-component.html",
  styleUrls: ["./tab-container-component.css"]
})
export class TabsContainerComponent implements AfterViewInit {
  @ContentChildren(TabContentComponent)
  tabs: QueryList<TabContentComponent>;

  @Output()
  public TabChangeEvent: EventEmitter<TabContentComponent> = new EventEmitter();

  public SetActiveTabByID = (id: string) => {
    if (id == null) return;
    const activeTab = this.tabs.find(t => t.tabID == id);
    if (activeTab != null) {
      activeTab.isActiveTab = true;
    }
  };

  public SetAllTabsInactive = () => {
    this.tabs.forEach(t => (t.isActiveTab = false));
  };

  ngAfterViewInit(): void {
    this.tabs.notifyOnChanges();
    this.tabs.changes.subscribe(() => this.hookUpEvents());
    this.hookUpEvents();
  }

  private hookUpEvents = () => {
    this.tabs.forEach(t => {
      t.tabClicked = this.TabChangeEvent;
    });
  };
}
