/// <reference path="BaseComponent.tsx" />

namespace Buhta {
    export interface TabsProps extends BaseComponentProps {
        tabs?: TabProps[];
        activeTabId?: string;
        activeTabChanged?: (tabId: string) => void;
    }

    export interface TabsState extends BaseComponentState {
        // tabs: TabProps[];

    }

    export class Tabs extends BaseComponent<TabsProps, TabsState> {

        constructor(props: TabsProps, context) {
            super(props, context);
        }


        protected willMount() {
            super.willMount();
            this.createStateTabList();
        }

        protected didMount() {
            super.didMount();
            // if (this.props.activeTabChanged) {
            //     $(this.tabsElement).find("ul>li>a") .on("shown.bs.tab", function (e) {
            //         let target = $(e.target).attr("href"); // activated tab
            //         window.alert("target");
            //     });
            // }
        }

        protected didUpdate(prevProps, prevState, prevContext) {
            super.didUpdate(prevProps, prevState, prevContext);
            if (this.props.activeTabChanged) {
                let callback = this.props.activeTabChanged;
                $(this.tabsElement).find("ul>li>a").off("shown.bs.tab").on("shown.bs.tab", function (e) {
                    let activeTabId = $(e.target).attr("data-id"); // activated tab
                    console.log(activeTabId);
                    callback(activeTabId);
                });
            }
        }

        protected willReceiveProps(nextProps: TabsProps) {
            super.willReceiveProps(nextProps);
            //
            // // добавляем новые
            // if (nextProps.tabs) {
            //     nextProps.tabs.forEach((nextTab) => {
            //         if (this.state.tabs.filter((stateTab) => stateTab.id === nextTab.id).length === 0) {
            //             this.state.tabs.push(nextTab);
            //             this.refersh();
            //         }
            //     });
            // }
            //
            // // удаляем удаленные
            // if (nextProps.tabs) {
            //     if (this.state.tabs) {
            //         this.state.tabs = this.state.tabs.filter((stateTab) => {
            //             return (nextProps.tabs.filter((nextTab) => stateTab.id === nextTab.id).length > 0);
            //         });
            //     }
            // }
            // else
            //     this.state.tabs = [];
            //

        }

        createStateTabList() {
            // this.state.tabs = React.Children.map(this.props.children, ((child, index) => {
            //     if (Util.getReactElementClassName(child) !== "Tab")
            //         console.error("only children of type 'Tab' allowed in 'Tabs'");
            //     return (child as any).props as TabProps;
            // }));
            //
            // if (!this.state.tabs)
            //     this.state.tabs = [];
            // this.state.tabs.concat(this.props.tabs);

        }

        safeId(id: string): string {
            return id.replace(".", "-");
        }

        tabsElement: Element;

        render() {

            let dynamicTabs: TabProps[] = [];
            if (this.props.tabs)
                dynamicTabs = this.props.tabs;

            let activeId = this.props.activeTabId;
            if (!activeId) {
                React.Children.map(this.props.children, (_child, index) => {
                    let child = (_child as any).props as TabProps;
                    if (child.active)
                        activeId = child.id;
                });

                dynamicTabs.map((child, index) => {
                    if (child.active)
                        activeId = child.id;
                });
            }

            return (
                <div className={this.renderClassName()} ref={(e) => this.tabsElement = e}>
                    <ul className="nav nav-tabs">
                        { React.Children.map(this.props.children, (_child, index) => {
                            let child = (_child as any).props as TabProps;
                            return (
                                <li ref={this.safeId(child.id)} key={index}
                                    className={child.id === activeId ? "active" : null}>
                                    <a href={"#" + this.safeId(child.id) } data-toggle="tab" data-id={child.id}>
                                        { child.title }
                                    </a>
                                </li>);

                        })}

                        { dynamicTabs.map((child, index) => {

                            return (
                                <li ref={this.safeId(child.id)} key={index}
                                    className={child.id === activeId ? "active" : null}>
                                    <a href={"#" + this.safeId(child.id) } data-toggle="tab" data-id={child.id}>
                                        { child.title }
                                    </a>
                                </li>);

                        })}

                    </ul>

                    <div className="tab-content">
                        { this.props.children }

                        { dynamicTabs.filter((tab) => _.isFunction(tab.renderContent)).map(((child, index) => {

                            return (
                                <div
                                    className={child.id === activeId ? "tab-pane active" : "tab-pane"}
                                    id={this.safeId(child.id)}
                                    key={this.safeId(child.id)}
                                >
                                    {child.renderContent()}
                                </div>
                            );

                        }))}

                    </div>

                </div>
            );

        }
    }

    export interface TabProps extends BaseComponentProps {
        title: string;
        id: string;
        active?: boolean;
        renderContent?: () => JSX.Element;
    }

    export interface TabState extends BaseComponentState {
        active: boolean;
    }

    export class Tab extends BaseComponent<TabProps, TabState> {

        constructor(props: TabProps, context) {
            super(props, context);
        }

        //renderTitle(): JSX.Element {
        //    return <span>{this.props.title}</span>;

        //}

        render() {

            this.addClassName("tab-pane");
            if (this.props.active)
                this.addClassName("active");
            else
                this.removeClassName("active");
            return (
                <div className={this.renderClassName() } id={this.props.id}>{this.props.children}</div>
            );
        }
    }


}