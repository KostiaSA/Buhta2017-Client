var Buhta;
(function (Buhta) {
    //  declare var Binder;
    var DesignedObject = (function () {
        function DesignedObject() {
            // id: string;
            // name: string;
            // className: string;
            // inheritFrom: string;
            // moduleName: string;
            // references: Array<string> = [];
            this.propertyEditors = [];
        }
        DesignedObject.prototype.registerPropertyEditors = function () {
            this.propertyEditors.length = 0;
        };
        DesignedObject.prototype.registerPropertyEditor = function (propertyName, propertyEditor) {
            propertyEditor.designedObject = this;
            propertyEditor.propertyName = propertyName;
            this.propertyEditors.push(propertyEditor);
        };
        return DesignedObject;
    }());
    Buhta.DesignedObject = DesignedObject;
})(Buhta || (Buhta = {}));
/// <reference path="DesignedObject.tsx" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Buhta;
(function (Buhta) {
    var DesignedComponent = (function (_super) {
        __extends(DesignedComponent, _super);
        function DesignedComponent() {
            _super.call(this);
        }
        Object.defineProperty(DesignedComponent.prototype, "$$info", {
            // inheritFrom: string;
            // moduleName: string;
            // description: string;
            // references: Array<string> = [];
            get: function () {
                return Buhta.componentRegistry[this.$$className];
            },
            enumerable: true,
            configurable: true
        });
        DesignedComponent.prototype.emitTsCode = function () {
            var _this = this;
            this.registerPropertyEditors();
            var tsCode = new Buhta.TsCode(this.$$info);
            this.propertyEditors.forEach(function (editor) {
                editor.designedObject = _this;
                editor.emitTsCode(tsCode, "this");
            });
            return tsCode.getCode();
        };
        // сохранение в проект на сервере
        DesignedComponent.prototype.saveToServer = function () {
            return Buhta.writeTextFile(this.$$info.moduleName, this.$$info.className + ".ts", this.emitTsCode());
        };
        return DesignedComponent;
    }(Buhta.DesignedObject));
    Buhta.DesignedComponent = DesignedComponent;
})(Buhta || (Buhta = {}));
/// <reference path="DesignedComponent.tsx" />
var Buhta;
(function (Buhta) {
    var Application = (function (_super) {
        __extends(Application, _super);
        function Application() {
            _super.apply(this, arguments);
        }
        Application.prototype.registerPropertyEditors = function () {
            _super.prototype.registerPropertyEditors.call(this);
            this.registerPropertyEditor("appName", new Buhta.StringPropertyEditor("Параметры", "Основные", "Название приложения"));
        };
        return Application;
    }(Buhta.DesignedComponent));
    Buhta.Application = Application;
})(Buhta || (Buhta = {}));
var Buhta;
(function (Buhta) {
    Buhta.componentRegistry = {};
    function registerComponent(comp) {
        var compId = comp.moduleName + "." + comp.className;
        if (Buhta.componentRegistry[compId])
            console.error("component is already registered: " + compId);
        else
            Buhta.componentRegistry[compId] = comp;
    }
    Buhta.registerComponent = registerComponent;
})(Buhta || (Buhta = {}));
/// <reference path="DesignedComponent.tsx" />
var Buhta;
(function (Buhta) {
    var Module = (function (_super) {
        __extends(Module, _super);
        function Module() {
            _super.apply(this, arguments);
        }
        Module.prototype.registerPropertyEditors = function () {
            _super.prototype.registerPropertyEditors.call(this);
            this.registerPropertyEditor("vendor", new Buhta.StringPropertyEditor("Параметры", "Основные", "Автор"));
        };
        return Module;
    }(Buhta.DesignedComponent));
    Buhta.Module = Module;
})(Buhta || (Buhta = {}));
/// <reference path="DesignedComponent.tsx" />
var Buhta;
(function (Buhta) {
    var Table = (function (_super) {
        __extends(Table, _super);
        function Table() {
            _super.apply(this, arguments);
            this.columns = [];
        }
        Table.prototype.addColumn = function (initCallback) {
            var col = new Buhta.TableColumn();
            col.table = this;
            this.columns.push(col);
            initCallback(col);
        };
        Table.prototype.registerPropertyEditors = function () {
            _super.prototype.registerPropertyEditors.call(this);
            this.registerPropertyEditor("sqlName", new Buhta.StringPropertyEditor("Параметры", "Основные", "sql имя таблицы"));
            this.registerPropertyEditor("columns", new Buhta.TableColumnsPropertyEditor("Колонки", "", "Колонки таблицы", "addColumn"));
        };
        return Table;
    }(Buhta.DesignedComponent));
    Buhta.Table = Table;
})(Buhta || (Buhta = {}));
var Buhta;
(function (Buhta) {
    var TableColumn = (function (_super) {
        __extends(TableColumn, _super);
        function TableColumn() {
            _super.apply(this, arguments);
        }
        TableColumn.prototype.registerPropertyEditors = function () {
            _super.prototype.registerPropertyEditors.call(this);
            this.registerPropertyEditor("name", new Buhta.StringPropertyEditor("Параметры", "Основные", "имя колонки"));
        };
        return TableColumn;
    }(Buhta.DesignedObject));
    Buhta.TableColumn = TableColumn;
})(Buhta || (Buhta = {}));
/// <reference path="designedcomponent.tsx" />
var Buhta;
(function (Buhta) {
    function format1() {
        // return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        //    console.log("g(): called");
        // }//return Reflect.metadata(formatMetadataKey, formatString);
    }
    var TestComp1 = (function (_super) {
        __extends(TestComp1, _super);
        function TestComp1() {
            _super.call(this);
        }
        TestComp1.prototype.registerPropertyEditors = function () {
            _super.prototype.registerPropertyEditors.call(this);
            this.registerPropertyEditor("name", new Buhta.StringPropertyEditor("Параметры", "Основные", "Имя компонента"));
            this.registerPropertyEditor("sqlname", new Buhta.StringPropertyEditor("Параметры", "Основные", "sql Имя компонента"));
            this.registerPropertyEditor("проблема", new Buhta.StringPropertyEditor("Дополнительно", "Группа 1", "Имя 22  компонента"));
        };
        TestComp1.prototype.init = function () {
        };
        return TestComp1;
    }(Buhta.DesignedComponent));
    Buhta.TestComp1 = TestComp1;
})(Buhta || (Buhta = {}));
/// <reference path="../../typings/index.d.ts" />
/// <reference path="../core/dist/core.d.ts" />
/// <reference path="../components/dist/components.d.ts" />
/// <reference path="../../typings/index.d.ts" />
/// <reference path="../core/dist/core.d.ts" />
/// <reference path="../components/dist/components.d.ts" />
/**
 * Created by Kostia on 15.06.2016.
 */
var Buhta;
(function (Buhta) {
    Buhta.DesignerAppStore = new DesignerAppStoreStatic();
    var DesignerAppStoreStatic = (function (_super) {
        __extends(DesignerAppStoreStatic, _super);
        function DesignerAppStoreStatic() {
            var _this = this;
            _super.apply(this, arguments);
            this.event = {
                openedComponentsChange: {
                    bind: function (callback) {
                        _this.on("openedComponentsChange", callback);
                    },
                    emit: function () {
                        _this.emit("openedComponentsChange");
                    },
                    unbind: function () {
                        _this.off("openedComponentsChange");
                    }
                },
                activeComponentChange: {
                    bind: function (callback) {
                        _this.on("activeComponentChange", callback);
                    },
                    emit: function (activeComp) {
                        _this.emit("activeComponentChange", activeComp);
                    },
                    unbind: function () {
                        _this.off("activeComponentChange");
                    }
                }
            };
            this.action = {
                openComponent: function (comp) {
                    _this.event.activeComponentChange.emit(comp);
                    _this.event.openedComponentsChange.emit();
                    //  this.emit(this.events.openedComponentsChange);
                }
            };
            this.openedComponents = [];
        }
        //        emit(event: string, ...args: any[]): boolean;
        DesignerAppStoreStatic.prototype.bindOpenedComponentsChange = function (callback) {
            //on(openedComponentsChangeEvent, callback);
        };
        DesignerAppStoreStatic.prototype.unbindOpenedComponentsChange = function () {
        };
        return DesignerAppStoreStatic;
    }(EventEmitter));
    Buhta.DesignerAppStoreStatic = DesignerAppStoreStatic;
    Buhta.DesignerAppStore.event.openedComponentsChange.bind(function () {
    });
})(Buhta || (Buhta = {}));
var Buhta;
(function (Buhta) {
    var Designer = (function (_super) {
        __extends(Designer, _super);
        function Designer(props, context) {
            var _this = this;
            _super.call(this, props, context);
            this.saveButtonClick = function () {
                _this.state.designedComponent.saveToServer()
                    .done(function () {
                    _this.state.needSave = false;
                    _this.refersh();
                    alert("ok--");
                })
                    .fail(function (err) {
                    alert(err);
                });
            };
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
        Designer.prototype.didMount = function () {
            var _this = this;
            _super.prototype.didMount.call(this);
            if (this.state.designedComponent) {
                this.state.designedComponent.propertyEditors.forEach(function (editor) {
                    WatchJS.watch(editor.designedObject, editor.propertyName, function () {
                        console.log("watch(" + editor.propertyName + ")");
                        _this.state.needSave = true;
                        _this.refersh();
                    });
                });
            }
        };
        Designer.prototype.willUnmount = function () {
            this.state.designedComponent.propertyEditors.forEach(function (editor) {
                WatchJS.unwatch(editor.designedObject, editor.propertyName);
            });
            _super.prototype.willUnmount.call(this);
        };
        Designer.prototype.getPagesList = function () {
            if (this.state.designedComponent)
                return _.uniq(this.state.designedComponent.propertyEditors.map(function (editor) {
                    return editor.propertyPage;
                }));
            else
                return [];
        };
        Designer.prototype.getGroupsList = function (page) {
            if (this.state.designedComponent)
                return _.uniq(this.state.designedComponent.propertyEditors
                    .filter(function (editor) { return editor.propertyPage === page; })
                    .map(function (editor) {
                    return editor.propertyGroup;
                }));
            else
                return [];
        };
        Designer.prototype.getEditorsList = function (page, group) {
            console.log("return editor 1 " + page + group);
            if (this.state.designedComponent)
                return (this.state.designedComponent.propertyEditors
                    .filter(function (editor) { return editor.propertyGroup === group && editor.propertyPage === page; })
                    .map(function (editor) {
                    console.log("return editor");
                    return editor;
                }));
            else
                return [];
        };
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
        Designer.prototype.renderGroups = function (page) {
            var _this = this;
            console.log("renderGroups");
            return (this.getGroupsList(page).map(function (group, index) {
                return (React.createElement("div", {key: group, className: "panel-body"}, React.createElement("form", {className: "form-horizontal"}, _this.getEditorsList(page, group).map(function (editor, _index) {
                    return editor.renderEditor(_index);
                }))));
            }));
        };
        Designer.prototype.renderPage = function (page) {
            return (React.createElement("div", null, React.createElement("h4", {className: "page-title", style: { paddingTop: 15 }}, page), React.createElement("div", {className: "panel panel-info"}, this.renderGroups(page))));
        };
        Designer.prototype.renderTabs = function () {
            var _this = this;
            return (this.getPagesList().map(function (page, index) {
                return (React.createElement(Buhta.Tab, {title: page, id: page, key: page, active: index === 0}, _this.renderPage(page)));
            }));
        };
        Designer.prototype.render = function () {
            var compName = "";
            if (this.state.designedComponent) {
                this.state.designedComponent.registerPropertyEditors();
                compName = this.state.designedComponent.constructor.toString().match(/\w+/g)[1];
            }
            return (React.createElement("div", {className: "container body-content edit-page"}, React.createElement("div", {className: "pull-right"}, React.createElement(Buhta.Button, null, "Синхронизация с SQL?"), React.createElement(Buhta.Button, {disabled: !this.state.needSave, onClick: this.saveButtonClick}, "Сохранить")), React.createElement("h3", null, React.createElement("img", {src: ""}), React.createElement("span", null, compName), React.createElement("small", null, "(таблица)")), React.createElement(Buhta.Tabs, null, this.renderTabs())));
        };
        return Designer;
    }(Buhta.BaseComponent));
    Buhta.Designer = Designer;
})(Buhta || (Buhta = {}));
var Buhta;
(function (Buhta) {
    var DesignerApp = (function (_super) {
        __extends(DesignerApp, _super);
        function DesignerApp(props, context) {
            _super.call(this, props, context);
            //this.state = {};
        }
        //this.addClassName();
        DesignerApp.prototype.render = function () {
            if (!this.state.projectTabs)
                this.state.projectTabs = { comps: [] };
            return (React.createElement(Buhta.LayoutPanel, {renderToBody: true, className: this.renderClassName()}, React.createElement(Buhta.LayoutPane, {region: "north"}, React.createElement("div", null, "верх")), React.createElement(Buhta.LayoutPane, {region: "center"}, React.createElement(Buhta.DesignerProjectTabs, React.__spread({}, this.state.projectTabs))), React.createElement(Buhta.LayoutPane, {region: "west"}, React.createElement(Buhta.Tabs, {className: "designer-app-left-pane-tabs"}, React.createElement(Buhta.Tab, {title: "проект", id: "поект2", active: true}, React.createElement(Buhta.DesignerProjectTree, null)), React.createElement(Buhta.Tab, {title: "поиск", id: "поиск3"}, "ннн3"))), React.createElement(Buhta.LayoutPane, {region: "south"}, React.createElement("div", null, "низ"))));
        };
        return DesignerApp;
    }(Buhta.BaseComponent));
    Buhta.DesignerApp = DesignerApp;
})(Buhta || (Buhta = {}));
var Buhta;
(function (Buhta) {
    var DesignerProjectTabs = (function (_super) {
        __extends(DesignerProjectTabs, _super);
        function DesignerProjectTabs(props, context) {
            _super.call(this, props, context);
            //this.state = {};
        }
        //this.addClassName();
        DesignerProjectTabs.prototype.createTabs = function () {
            var _this = this;
            this.state.tabs = [];
            this.props.comps.forEach(function (comp) {
                var tab = {
                    title: comp.name,
                    id: comp.moduleName + "." + comp.className
                };
                _this.state.tabs.push(tab);
            });
        };
        DesignerProjectTabs.prototype.rowDblClick = function (row) {
            alert("dbl " + row.name);
            return false;
        };
        ;
        DesignerProjectTabs.prototype.render = function () {
            if (!this.state.tabs) {
                this.createTabs();
            }
            return (React.createElement(Buhta.Tabs, {tabs: this.state.tabs}));
        };
        return DesignerProjectTabs;
    }(Buhta.BaseComponent));
    Buhta.DesignerProjectTabs = DesignerProjectTabs;
})(Buhta || (Buhta = {}));
var Buhta;
(function (Buhta) {
    var DesignerProjectTree = (function (_super) {
        __extends(DesignerProjectTree, _super);
        function DesignerProjectTree(props, context) {
            _super.call(this, props, context);
            //this.state = {};
        }
        DesignerProjectTree.prototype.createProjectDataSource = function () {
            var _this = this;
            this.projectDataSource = [];
            _.values(Buhta.componentRegistry).forEach(function (comp) {
                var compName = comp.name + "  (" + comp.className + ")";
                var row = new Buhta.GridTreeNodeData();
                row.title = compName;
                row.id = comp.moduleName + "." + comp.className;
                row.parent = comp.parent;
                row.rowData = comp;
                _this.projectDataSource.push(row);
            });
        };
        DesignerProjectTree.prototype.rowDblClick = function (row) {
            alert("dbl " + row.name);
            return false;
        };
        ;
        DesignerProjectTree.prototype.render = function () {
            if (!this.projectDataSource) {
                this.createProjectDataSource();
            }
            var ProjectTreeGrid = (function (_super) {
                __extends(ProjectTreeGrid, _super);
                function ProjectTreeGrid() {
                    _super.apply(this, arguments);
                }
                return ProjectTreeGrid;
            }(Buhta.TreeGrid));
            return (React.createElement(ProjectTreeGrid, {dataSource: this.projectDataSource, isNeedConvertFlatDataToTree: true, onRowDblClick: this.rowDblClick.bind(this)}, React.createElement(Buhta.TreeGridColumn, {caption: "элемент"})));
        };
        return DesignerProjectTree;
    }(Buhta.BaseComponent));
    Buhta.DesignerProjectTree = DesignerProjectTree;
})(Buhta || (Buhta = {}));
var Buhta;
(function (Buhta) {
    var DesignerStartPage = (function (_super) {
        __extends(DesignerStartPage, _super);
        function DesignerStartPage(props, context) {
            _super.call(this, props, context);
            this.state = {};
            this.state.text1 = "!227-+1w2w5411111";
            this.state.text2 = "2552222";
        }
        DesignerStartPage.prototype.handleChange1 = function (event) {
            // console.log("change 1x1111 ==>" + (event.target as any).value);
            // this.state["жопа"] = (event.target as any).value;
            // this.setState({text2: (event.target as any).value, text1: (event.target as any).value});
            // // //this.setState({text2: "(event.target as any).value}"});
            // // this.state.text2 = "(event.target as any).value}";
            // // this.setState({});
            // console.log(this.state);
            this.state.text1 = event.target.value;
            //            this.setState({});
        };
        DesignerStartPage.prototype.handleChange2 = function (event) {
            // this.state["жопа"] = (event.target as any).value;
            // this.setState({});
            // console.log("change 2x22 ==>" + (event.target as any).value);
        };
        // componentWillUnmount() {
        //     console.log("componentWillUnmount");
        // }
        //
        // componentWillMount() {
        //     console.log("componentWillMount");
        // }
        DesignerStartPage.prototype.render = function () {
            // this.state.watch("text1", (prop, newValue, oldValue) => {
            //     console.log("watch(жопа)");
            // });
            // WatchJS.watch(this.state, "q11", () => {
            //     console.log("watch(жопа)");
            //     this.state.text2 = "---" + this.state.text1;
            //     this.setState({});
            //
            // });
            return (React.createElement("div", {className: "container"}, React.createElement("h1", null, "Бухта 7.0"), React.createElement("button", {className: "test-table"}, "Test table"), React.createElement(Buhta.Input, {type: Buhta.InputType.Text, bindObj: this.state, style: { width: 450 }, bindProp: "text1"}), React.createElement("div", null, this.state["жопа"]), React.createElement("input", {type: "text", className: "223", style: { maxWidth: 400 }, value: this.state.text2, onChange: this.handleChange2.bind(this)}), React.createElement(Buhta.Designer, null)));
        };
        return DesignerStartPage;
    }(React.Component));
    Buhta.DesignerStartPage = DesignerStartPage;
})(Buhta || (Buhta = {}));
//export var QQQ: String = "qqq-str";
//alert('жопа1-123-==');
//interface PropertyGridProps {
//    designedComponent?: DesignedComponent;
//    //message?: string;
//    //compiler: string;
//    //framework: string;
//    //onClickHandler?: __React.ReactEventHandler;
//}
//interface PropertyGridState {
//    clickCount: number;
//}
//class PropertyGrid extends React.Component<PropertyGridProps, PropertyGridState> {
//    constructor(props: PropertyGridProps, context) {
//        super(props, context);
//        this.state = { clickCount: 0 };
//        this.props = {};
//      //  this.props.designedComponent.name="компонент 1";
//    }
//    //renderEditors():JSX.Element    { 
//    //    return (<div/>);
//    //}
//    gridRef(c){
//        alert('gridRef(c)11111');
//        ($(c) as any).propertygrid({});
//    }
//    render() {
//        //let compName = "";
//        //if (this.props.designedComponent)
//        //    compName = this.props.designedComponent.constructor.toString().match(/\w+/g)[1];
//        //this.props.designedComponent.propertyEditors.forEach((edt) => {
//        //    edt.designedObject = this.props.designedObject;
//        //})
//        this.props.designedComponent.registerPropertyEditors();
//        return (
//            //<div>че</div>
// <table id="pg" className="XXeasyui-propertygrid" ref={this.gridRef} style={{width:300,height:500}}>
//  </table>
//            //<div>
//            //    <span>property grid</span>
//            //    {this.props.designedComponent.propertyEditors.map<JSX.Element>((edt) => {
//            //        //console.log('жопа');
//            //        edt.designedObject=this.props.designedObject;
//            //        return edt.renderEditor();
//            //    }) }
//            //</div>
//        );
//    }
//}
////export var QQQ: String = "qqq-str";
////alert('жопа1-123-==');
var Buhta;
(function (Buhta) {
    var TsCode = (function () {
        function TsCode(compInfo) {
            this.compInfo = compInfo;
            this.constructorCode = "";
            /*
             this.constructorCode = "";
             this.propertiesCode = "";
             */
        }
        //     propertiesCode: string = "";
        TsCode.prototype.addProperty = function (assignName, propName, propType, initValue) {
            // this.propertiesCode += "  " + propName + ": " + propType + ";\n";
            if (this.constructorCode !== "")
                this.constructorCode += "\n";
            this.constructorCode += assignName + "." + propName + "=";
            if (_.isString(initValue) || _.isNumber(initValue))
                this.constructorCode += JSON.stringify(initValue);
            else if (_.isDate(initValue))
                this.constructorCode += "new Date(" + JSON.stringify(initValue) + ")";
            else if (_.isUndefined(initValue))
                this.constructorCode += "undefined";
            else
                throw "TsCode.addProperty '" + propName + "': invalid type '" + propType + "'";
            this.constructorCode += ";";
        };
        TsCode.prototype.addPropertyRaw = function (assignName, propName, propType, rawInitValue) {
            //  this.propertiesCode += "  " + propName + ": " + propType + ";\n";
            if (this.constructorCode !== "")
                this.constructorCode += "\n";
            this.constructorCode += assignName + "." + propName + "=";
            this.constructorCode += rawInitValue;
            this.constructorCode += ";";
        };
        TsCode.prototype.addRaw = function (rawInitValue) {
            if (this.constructorCode !== "")
                this.constructorCode += "\n";
            this.constructorCode += rawInitValue;
        };
        TsCode.prototype.getCode = function () {
            var code = "";
            _.uniq(this.compInfo.references).forEach(function (refFileName) {
                code += "/// <reference path=" + JSON.stringify(refFileName) + " />\n";
            });
            // code += `/// <reference path="references.ts" />\n`;
            // code += `/// <reference path="testcomp2.ts" />\n`;
            code += "namespace " + this.compInfo.moduleName + " {";
            code += "export class " + this.compInfo.className;
            if (this.compInfo.inheritFrom)
                code += " extends " + this.compInfo.inheritFrom;
            code += "{\n";
            code += "constructor() {\n";
            code += "// constructor code is auto-generated by buhta designer\n";
            code += "super();\n";
            // this.compInfo.references.forEach((refFileName) => {
            //     code += "this.references.push(" + JSON.stringify(refFileName) + ");\n";
            // });
            code += "this.$$className=" + JSON.stringify(this.compInfo.moduleName + "." + this.compInfo.className) + "\n";
            code += this.constructorCode + "\n";
            code += "// constructor code is auto-generated by buhta designer\n";
            code += "}\n";
            //code += "  " + this.propertiesCode + "\n";
            code += "  }\n";
            code += "}\n";
            code += "\n// this code is auto-generated by buhta designer\nBuhta.componentRegistry[" + JSON.stringify(this.compInfo.moduleName + "." + this.compInfo.className) + "] = {\n    name: " + JSON.stringify(this.compInfo.name) + ",\n    className: " + JSON.stringify(this.compInfo.className) + ",\n    moduleName: " + JSON.stringify(this.compInfo.moduleName) + ",\n    inheritFrom: " + JSON.stringify(this.compInfo.inheritFrom) + ",\n    description: " + JSON.stringify(this.compInfo.description) + ",\n    references: " + JSON.stringify(this.compInfo.references) + ",\n    createInstance:(): Buhta.DesignedComponent => new " + (this.compInfo.moduleName + "." + this.compInfo.className) + "() \n};\n// this code is auto-generated by buhta designer";
            return code;
        };
        return TsCode;
    }());
    Buhta.TsCode = TsCode;
})(Buhta || (Buhta = {}));
var Buhta;
(function (Buhta) {
    var BasePropertyEditor = (function (_super) {
        __extends(BasePropertyEditor, _super);
        function BasePropertyEditor(propertyPage, propertyGroup, propertyDescription) {
            _super.call(this);
            this.propertyPage = propertyPage;
            this.propertyGroup = propertyGroup;
            this.propertyDescription = propertyDescription;
            this.state = { designedComponent: {} };
        }
        BasePropertyEditor.prototype.getPropertyType = function () {
            return "Object";
        };
        BasePropertyEditor.prototype.renderEditor = function (index) {
            return (React.createElement("span", null, "editor not defined"));
        };
        BasePropertyEditor.prototype.emitTsCode = function (tsCode, assignName) {
            tsCode.addProperty(assignName, this.propertyName, this.getPropertyType(), this.designedObject[this.propertyName]);
        };
        return BasePropertyEditor;
    }(React.Component));
    Buhta.BasePropertyEditor = BasePropertyEditor;
})(Buhta || (Buhta = {}));
/// <reference path="BasePropertyEditor.tsx" />
var Buhta;
(function (Buhta) {
    var BaseCollectionPropertyEditor = (function (_super) {
        __extends(BaseCollectionPropertyEditor, _super);
        function BaseCollectionPropertyEditor(propertyPage, propertyGroup, propertyDescription, collectionAddMethodName) {
            _super.call(this, propertyPage, propertyGroup, propertyDescription);
            this.collectionAddMethodName = collectionAddMethodName;
        }
        BaseCollectionPropertyEditor.prototype.emitTsCode = function (tsCode, assignName) {
            var _this = this;
            var collection = this.designedObject[this.propertyName];
            collection.forEach(function (collectionItem) {
                // this.addColumn((col) => {
                //     col.name = "Номер";
                // });
                var itemName = _this.collectionAddMethodName.toLocaleLowerCase();
                if (_.startsWith(itemName, "add"))
                    itemName = itemName.slice(3);
                tsCode.addRaw(assignName + "." + _this.collectionAddMethodName + "((" + itemName + ") => {");
                collectionItem.registerPropertyEditors();
                collectionItem.propertyEditors.forEach(function (editor) {
                    editor.designedObject = collectionItem;
                    editor.emitTsCode(tsCode, itemName);
                });
                tsCode.addRaw("});\n");
            });
        };
        return BaseCollectionPropertyEditor;
    }(Buhta.BasePropertyEditor));
    Buhta.BaseCollectionPropertyEditor = BaseCollectionPropertyEditor;
})(Buhta || (Buhta = {}));
var Buhta;
(function (Buhta) {
    var StringArrayPropertyEditor = (function (_super) {
        __extends(StringArrayPropertyEditor, _super);
        function StringArrayPropertyEditor(propertyPage, propertyGroup, propertyDescription) {
            _super.call(this, propertyPage, propertyGroup, propertyDescription);
        }
        StringArrayPropertyEditor.prototype.getPropertyType = function () {
            return "string";
        };
        StringArrayPropertyEditor.prototype.handleChange = function (event) {
            this.designedObject[this.propertyName] = event.target.value;
            console.log("change === " + this.propertyName + " " + this.designedObject[this.propertyName]);
        };
        StringArrayPropertyEditor.prototype.emitTsCode = function (tsCode, assignName) {
            var rawCode = "[";
            this.designedObject[this.propertyName].forEach(function (strValue) {
                rawCode += JSON.stringify(strValue) + ",";
            });
            rawCode = rawCode.removeLastChars(",");
            rawCode += "]";
            tsCode.addPropertyRaw(assignName, this.propertyName, this.getPropertyType(), this.designedObject[this.propertyName]);
        };
        StringArrayPropertyEditor.prototype.renderEditor = function (index) {
            /*
             Binder
             this.designedObject.addWatch(this.propertyName, (name, oldVal, newVal) => {
             console.log('change 1 ' + name +" "+oldVal+" -> "+newVal);
             });
             */
            return (React.createElement("div", {className: "form-group", key: index.toString()}, React.createElement("label", {className: "col-sm-3 control-label"}, this.propertyName), React.createElement("div", {className: "col-sm-9"}, React.createElement("input", {type: "text", className: "form-control", style: { maxWidth: 500 }, onChange: this.handleChange.bind(this)}), React.createElement("small", {className: "error-text hidden"}))));
        };
        return StringArrayPropertyEditor;
    }(Buhta.BasePropertyEditor));
    Buhta.StringArrayPropertyEditor = StringArrayPropertyEditor;
})(Buhta || (Buhta = {}));
/// <reference path="BasePropertyEditor.tsx" />
var Buhta;
(function (Buhta) {
    var StringPropertyEditor = (function (_super) {
        __extends(StringPropertyEditor, _super);
        function StringPropertyEditor(propertyPage, propertyGroup, propertyDescription) {
            _super.call(this, propertyPage, propertyGroup, propertyDescription);
        }
        StringPropertyEditor.prototype.getPropertyType = function () {
            return "string";
        };
        StringPropertyEditor.prototype.handleChange = function (event) {
            this.designedObject[this.propertyName] = event.target.value;
            console.log("change === " + this.propertyName + " " + this.designedObject[this.propertyName]);
        };
        StringPropertyEditor.prototype.renderEditor = function (index) {
            /*
             Binder
             this.designedObject.addWatch(this.propertyName, (name, oldVal, newVal) => {
             console.log('change 1 ' + name +" "+oldVal+" -> "+newVal);
             });
             */
            return (React.createElement("div", {className: "form-group", key: index.toString()}, React.createElement("label", {className: "col-sm-3 control-label"}, this.propertyName), React.createElement("div", {className: "col-sm-9"}, React.createElement(Buhta.Input, {type: Buhta.InputType.Text, className: "form-control", style: { maxWidth: 500 }, bindObj: this.designedObject, bindProp: this.propertyName}), React.createElement("small", {className: "error-text hidden"}))));
        };
        return StringPropertyEditor;
    }(Buhta.BasePropertyEditor));
    Buhta.StringPropertyEditor = StringPropertyEditor;
})(Buhta || (Buhta = {}));
var Buhta;
(function (Buhta) {
    var TableColumnsPropertyEditor = (function (_super) {
        __extends(TableColumnsPropertyEditor, _super);
        function TableColumnsPropertyEditor() {
            _super.apply(this, arguments);
        }
        // constructor(propertyPage: string, propertyGroup: string, propertyDescription?: string) {
        //     super(propertyPage, propertyGroup, propertyDescription);
        // }
        TableColumnsPropertyEditor.prototype.getPropertyType = function () {
            return "Array<TableColumn>";
        };
        TableColumnsPropertyEditor.prototype.renderEditor = function (index) {
            /*
             Binder
             this.designedObject.addWatch(this.propertyName, (name, oldVal, newVal) => {
             console.log('change 1 ' + name +" "+oldVal+" -> "+newVal);
             });
             */
            return (React.createElement("div", {className: "form-group", key: index.toString()}, React.createElement("label", {className: "col-sm-3 control-label"}, this.propertyName), React.createElement("div", {className: "col-sm-9"}, React.createElement(Buhta.Input, {type: Buhta.InputType.Text, className: "form-control", style: { maxWidth: 500 }, bindObj: this.designedObject, bindProp: this.propertyName}), React.createElement("small", {className: "error-text hidden"}))));
        };
        return TableColumnsPropertyEditor;
    }(Buhta.BaseCollectionPropertyEditor));
    Buhta.TableColumnsPropertyEditor = TableColumnsPropertyEditor;
})(Buhta || (Buhta = {}));
//# sourceMappingURL=designer.js.map