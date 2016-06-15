namespace Buhta {

    export interface DesignerProjectTabsProps extends BaseComponentProps {
        comps: ComponentInfo[];
    }

    export interface DesignerProjectTabsState extends BaseComponentState {
        tabs: TabProps[];
    }


    export class DesignerProjectTabs extends BaseComponent<DesignerProjectTabsProps, DesignerProjectTabsState> {

        constructor(props: DesignerProjectTabsProps, context) {
            super(props, context);
            //this.state = {};
        }
        
        protected willMount() {
            super.willMount();
            this.createTabs();
        }

        protected didMount() {
            super.didMount();

            designerAppDispatcher.event.openedComponentsChange.bind(() => {
                //alert("comp-add");

                // добавляем новые
                designerAppDispatcher.openedComponents.forEach((comp) => {

                    if (this.state.tabs.filter((t) => t.id === comp.moduleName + "." + comp.className).length === 0) {
                        let tab: TabProps = {
                            title: comp.name,
                            id: comp.moduleName + "." + comp.className
                        };
                        this.state.tabs.push(tab);
                    }


                    this.refersh();
                });

                // удаляем удаленные
                this.state.tabs = this.state.tabs.filter((stateTab) => {
                    return designerAppDispatcher.openedComponents.filter((comp) => stateTab.id === comp.moduleName + "." + comp.className).length > 0;
                });

            });
        };

        protected willUnmount() {
            designerAppDispatcher.event.openedComponentsChange.unbind();
            super.willUnmount();
        };

        private createTabs() {
            this.state.tabs = [];
            this.props.comps.forEach((comp: ComponentInfo) => {
                let tab: TabProps = {
                    title: comp.name,
                    id: comp.moduleName + "." + comp.className
                };
                this.state.tabs.push(tab);
            });
        }

        // rowDblClick(row: ComponentInfo): boolean {
        //     alert("dbl " + row.name);
        //     return false;
        // };


        render() {

            return (
                <Tabs tabs={this.state.tabs}>

                </Tabs>
            );
        }
    }
}

