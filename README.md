# SimpleAngularTabControl
Exceptionally Simple Tab Control Made In Angular 5
```html
<!--
    Example usage
-->
<!--
    Optional event emitter output:
    OnTabClickEvent(tab : TabContentComponent)
    Invoked upon click of a tab heading (tab-content)
-->
<tab-control (OnTabClickEvent)="tabChangeEvent($event)">

    <!--
        Tabs container should contain all tab headings.
        A tab heading can be created using the TabContent component with the directive <tab-content></<tab-content>.

        TabContainer contains an event emitter (TabChangeEvent) which is invoked whenever the selected tab is changed.

        A list of TabBodyContent can be pulled from this component using the public property "bodies".
        Returned as a QueryList.

    -->


    <tabs-container (TabChangeEvent)="tabChangeEvent($event)">


        <!--
            TabContent defines a tab heading. Each one should have a unique ID passed using the "tabID" attribute.

            Optional inputs:
                @canInvoke: When set to "false" the tab body content won't change upon the tab being clicked. Defaults to true.  
                @float: Tab can be floated left or right within the tabs container. Defaults to right.
                @showTab: Defines the TabBodyContent container that will be made visible when the tab is clicked unless canInvoke is false. 

            Optional event emitter output:
                @searchTabClicked(tab : TabContentComponent)
                Invoked upon click of target tab heading (tab-content)
        -->
        <tab-content tabID="search" canInvoke="false" float="left" (tabClicked)="searchTabClicked($event)">
            <input [(ngModel)]="searchQuery" placeholder="Search" />
        </tab-content>

        <tab-content tabID="home" showTab="home-body" float="right">
            Home Tab Header
        </tab-content>

        <tab-content tabID="about" showTab="about-body" float="right">
            About Tab Header
        </tab-content>

        <tab-content tabID="about2" showTab="about-body" float="right">
            Different Tab Heading Same Body
        </tab-content>

    </tabs-container>


    <!--
        A list of TabBodyContent can be pulled from this component using the public property "bodies".
        Returned as a QueryList<TabBodyContent>.
    -->
    <body-container>


        <!--
            TabbodyContent defines a body for one or more TabContentHeadings.
            Each TabbodyContent should have a unique ID passed using the "tabID" attribute. 
            TabbodyContent can be made visible by assigning a "TabContent showTab" attribute the value of the TabbodyContent tabID. 

            You can also invoke the ShowTab = (tabID: string) method defined on the TabControl component by passing in the tab-body-content tabID.
        -->
        <tab-body-content tabID="home-body">
            <h1>Home Tab Body</h1>
            <p>You Search for: {{searchQuery}}</p>
        </tab-body-content>

        <tab-body-content tabID="about-body">
            <h1>About Tab Body</h1>
            <p>You Search for: {{searchQuery}}</p>
        </tab-body-content>


    </body-container>

</tab-control>
```
