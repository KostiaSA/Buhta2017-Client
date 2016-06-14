namespace Buhta {

    export interface DesignerAppProps extends BaseComponentProps {
        //name: string;
    }

    export interface DesignerAppState extends BaseComponentState {
        //x3: number;
    }

    export class DesignerApp extends BaseComponent<DesignerAppProps, DesignerAppState> {

        constructor(props: AppProps, context) {
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
                        <Tabs className="designer-app-center-pane-tabs">
                            <Tab title="проект" id="покт" active={true}>
                                <Designer/>
                            </Tab>
                            <Tab title="поиск" id="поск">ннн</Tab>
                        </Tabs>
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

