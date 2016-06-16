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

            designerAppDispatcher.openedComponents.forEach((comp) => {

                if (this.state.tabs.filter((t) => t.id === comp.moduleName + "." + comp.className).length === 0) {
                    if (!comp.editedInstance)
                        comp.editedInstance = comp.createInstance();
                    let tab: TabProps = {
                            title: comp.name,
                            id: comp.moduleName + "-" + comp.className,
                            renderContent: () => {
                                return (
                                    <Designer designedComponent={comp.editedInstance}>
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
                return designerAppDispatcher.openedComponents.filter((comp) => stateTab.id === comp.moduleName + "-" + comp.className).length > 0;
            });
            this.refersh();

        }

        protected willMount() {
            super.willMount();
            designerAppDispatcher.event.openedComponentsChange.bind(() => {
                console.log("openedComponentsChange");
                this.updateStateTabs();
            });

            designerAppDispatcher.event.activeComponentChange.bind((activeComp: ComponentInfo) => {
                this.state.activeTabId = activeComp.moduleName + "." + activeComp.className;
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
                <Tabs tabs={this.state.tabs} activeTabId={this.state.activeTabId}>

                </Tabs>
            );
        }
    }
}

