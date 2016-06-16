namespace Buhta {

    export interface DesignerAppProps extends BaseComponentProps {
    }

    export interface DesignerAppState extends BaseComponentState {
    }

    export class DesignerApp extends BaseComponent<DesignerAppProps, DesignerAppState> {

        constructor(props: DesignerAppProps, context) {
            super(props, context);
            //this.state = {};
        }

        //this.addClassName();

        render() {

            return (
                <LayoutPanel renderToBody={true} className={this.renderClassName()}>
                    <LayoutPane region="north">
                        <div>верх</div>
                    </LayoutPane>
                    <LayoutPane region="center">
                        <DesignerProjectTabs />
                    </LayoutPane>
                    <LayoutPane region="west">
                        <Tabs className="designer-app-left-pane-tabs">
                            <Tab title="проект" id="поект2" active={true}>
                                <DesignerProjectTree/>
                            </Tab>
                            <Tab title="поиск" id="поиск3">ннн3</Tab>
                        </Tabs>
                    </LayoutPane>
                    <LayoutPane region="south">
                        <div>низ</div>
                    </LayoutPane>
                </LayoutPanel>
            );
        }
    }
}

