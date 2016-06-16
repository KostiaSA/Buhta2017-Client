namespace Buhta {

    import componentRegistry = Buhta.componentRegistry;
    export interface DesignerProps extends BaseComponentProps {
        designedComponent: DesignedComponent;
        //designedComponent: ComponentInfo;
    }

    export interface DesignerState extends BaseComponentState {
        needSave: boolean;
    }

    export class Designer extends BaseComponent<DesignerProps, DesignerState> {

        constructor(props: DesignerProps, context) {
            super(props, context);
            // this.props = {designedObject:null};


            // componentRegistry["TestModule.TestComp1"] = {
            //     className: "TestComp1",
            //     inheritFrom: "TestComp2",
            //     name: "Тестовый компонент 12",
            //     moduleName: "TestModule",
            //     references: ["references.ts", "testcomp2.ts"],
            //     description: "это тестовый компонент",
            //     createInstance: null
            // };
            //
            // let x = new TestComp1();
            // x.$$className = "TestModule.TestComp1";
            // // x.inheritFrom = "TestComp2";
            // x.name = "Тестовый компонент 12";
            // x.sqlName = "sql база ps-web";
            // // x.moduleName = "TestModule";
            // // x.references = ["references.ts", "testcomp2.ts"];
            //
            //
            // this.state.designedComponent = x;
            this.state.needSave = false;
        }

        willMount() {
            super.willMount();
            if (this.props.designedComponent)
                this.props.designedComponent.registerPropertyEditors();
            //this.state.designedComponent = this.props.designedComponent.createInstance();

        }

        didMount() {
            super.didMount();

            if (this.props.designedComponent) {
                this.props.designedComponent.propertyEditors.forEach((editor) => {
                    WatchJS.watch(editor.designedObject, editor.propertyName, () => {
                        console.log("watch1(" + editor.propertyName + ")");
                        this.state.needSave = true;
                        this.refersh();
                    });
                });
            }

        }

        willUnmount() {
            this.props.designedComponent.propertyEditors.forEach((editor) => {
                WatchJS.unwatch(editor.designedObject, editor.propertyName);
            });
            super.willUnmount();
        }

        getPagesList(): Array<string> {

            if (this.props.designedComponent)
                return _.uniq(
                    this.props.designedComponent.propertyEditors.map((editor) => {
                        return editor.propertyPage;
                    }));
            else
                return [];
        }

        getGroupsList(page: string): Array<string> {

            if (this.props.designedComponent)
                return _.uniq(
                    this.props.designedComponent.propertyEditors
                        .filter((editor) => editor.propertyPage === page)
                        .map((editor) => {
                            return editor.propertyGroup;
                        }));
            else
                return [];
        }

        getEditorsList(page, group: string): Array<BasePropertyEditor> {
            console.log("return editor 1 " + page + group);

            if (this.props.designedComponent)
                return (
                    this.props.designedComponent.propertyEditors
                        .filter((editor) => editor.propertyGroup === group && editor.propertyPage === page)
                        .map((editor) => {
                            console.log("return editor " + editor.propertyName);
                            return editor;
                        }));
            else
                return [];
        }

        // renderEditors(page, group: string): Array<JSX.Element> {

        //    return (
        //        this.getEditorsList(page, group).map((editor, index) => {
        //            return (
        //                <div key={index.toString() } className="panel-body">
        //                    <form className="form-horizontal">

        //                    </form>
        //                </div>
        //            )
        //        }));
        // }

        renderGroups(page: string): Array<JSX.Element> {
            console.log("renderGroups");

            return (
                this.getGroupsList(page).map((group, index) => {
                    return (
                        <div key={group} className="panel-body">
                            <form className="form-horizontal">
                                {
                                    this.getEditorsList(page, group).map<JSX.Element>((editor, _index) => {
                                        return editor.renderEditor(_index);
                                    })
                                }
                            </form>
                        </div>
                    );
                }));
        }

        renderPage(page: string): JSX.Element {

            return (
                <div>
                    <h4 className="page-title" style={{ paddingTop: 15 }}>{page}</h4>
                    <div className="panel panel-info">

                        { this.renderGroups(page) }
                    </div>
                </div>
            );
        }

        renderTabs(): Array<JSX.Element> {
            return (
                this.getPagesList().map((page, index) => {
                    return (
                        <Tab title={page} id={page} key={page} active={index === 0}>
                            {this.renderPage(page) }
                        </Tab>
                    );
                }));
        }

        saveButtonClick = () => {
            this.props.designedComponent.saveToServer()
                .done(() => {
                    this.state.needSave = false;
                    this.refersh();
                    alert("ok--");
                })
                .fail((err) => {
                    alert(err);
                });
        };

        render(): JSX.Element {

            let compName = "";
            if (this.props.designedComponent) {
                //this.props.designedComponent.registerPropertyEditors();
                compName = this.props.designedComponent.constructor.toString().match(/\w+/g)[1];
            }


            return (
                <div className="container body-content edit-page">
                    <div className="pull-right">
                        <Button>Синхронизация с SQL?</Button>
                        <Button disabled={ !this.state.needSave } onClick={this.saveButtonClick}>Сохранить</Button>
                    </div>
                    <h3>
                        <img src=""/>
                        <span>{compName}</span>
                        <small>(таблица)</small>
                    </h3>
                    <Tabs>
                        { this.renderTabs() }
                    </Tabs>
                </div>
            );
        }

        // <Tab title="Закладка1" id="id1">содержимое1 </Tab>
        // <Tab title="Закладка2" id="id2" active={true}> содержимое2</Tab>
        // <div title="Закладка3"></div>

    }


}