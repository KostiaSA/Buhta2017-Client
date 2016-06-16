namespace Buhta {

    export interface DesignerProjectTabsProps extends BaseComponentProps {
        //comps: ComponentInfo[];
    }

    export interface DesignerProjectTabsState extends BaseComponentState {
        tabs: TabProps[];
        activeTabId: string;
    }


    export class DesignerProjectTabs extends BaseComponent<DesignerProjectTabsProps, DesignerProjectTabsState> {

        constructor(props: DesignerProjectTabsProps, context) {
            super(props, context);
            //this.state = {};
        }

        private updateStateTabs() {
            // добавляем новые
            if (!this.state.tabs)
                this.state.tabs = [];

            designerAppDispatcher.openedComponents.forEach((compInstance) => {

                if (this.state.tabs.filter((t) => t.id === compInstance.$$className).length === 0) {
                    let tab: TabProps = {
                            title: compInstance.$$info.name,
                            id: compInstance.$$className,
                            renderContent: () => {
                                return (
                                    <Designer designedComponent={compInstance}>
                                    </Designer>
                                );
                            }
                        }
                        ;
                    this.state.tabs.push(tab);
                }
            });

            // удаляем удаленные
            this.state.tabs = this.state.tabs.filter((stateTab) => {
                return designerAppDispatcher.openedComponents.filter((compInstance) => stateTab.id === compInstance.$$className).length > 0;
            });
            this.refersh();

        }

        protected willMount() {
            super.willMount();
            designerAppDispatcher.event.openedComponentsChange.bind(() => {
                console.log("openedComponentsChange");
                this.updateStateTabs();
            });

            designerAppDispatcher.event.activeComponentChange.bind(() => {
                this.state.activeTabId = designerAppDispatcher.activeComponentId;
                this.refersh();
                console.log("activeComponentChange");
            });

            this.updateStateTabs();
            //designerAppDispatcher.event.openedComponentsChange.emit();
            //designerAppDispatcher.event.activeComponentChange.emit();
        }


        protected didMount() {
            super.didMount();
        };

        protected willUnmount() {
            designerAppDispatcher.event.openedComponentsChange.unbind();
            super.willUnmount();
        };

        // private createTabs() {
        //     this.state.tabs = [];
        //     this.props.comps.forEach((comp: ComponentInfo) => {
        //         let tab: TabProps = {
        //             title: comp.name,
        //             id: comp.moduleName + "-" + comp.className
        //         };
        //         this.state.tabs.push(tab);
        //     });
        // }

        // rowDblClick(row: ComponentInfo): boolean {
        //     alert("dbl " + row.name);
        //     return false;
        // };


        render() {

            //this.createTabs();

            return (
                <Tabs
                    tabs={this.state.tabs}
                    activeTabId={this.state.activeTabId}
                    activeTabChanged={(tabId) => { designerAppDispatcher.activeComponentId = tabId; designerAppDispatcher.event.activeComponentChange.emit();}}
                >

                </Tabs>
            );
        }
    }
}

