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

        //this.addClassName();

        createTabs() {
            this.state.tabs = [];
            this.props.comps.forEach((comp: ComponentInfo) => {
                let tab: TabProps = {
                    title: comp.name,
                    id: comp.moduleName + "." + comp.className
                };
                this.state.tabs.push(tab);
            });
        }

        rowDblClick(row: ComponentInfo): boolean {
            alert("dbl " + row.name);
            return false;
        };


        render() {
            if (!this.state.tabs) {
                this.createTabs();
            }

            return (
                <Tabs tabs={this.state.tabs}>
                </Tabs>
            );
        }
    }
}

