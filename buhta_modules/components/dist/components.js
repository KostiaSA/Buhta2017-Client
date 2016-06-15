/// <reference path="../../typings/index.d.ts" />
/// <reference path="../core/dist/core.d.ts" />
/// <reference path="../../typings/index.d.ts" />
/// <reference path="../core/dist/core.d.ts" />
/// <reference path="references.ts" />
/// <reference path="../../typings/index.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Buhta;
(function (Buhta) {
    //    export class BaseComponent<P extends BaseComponentProps, S extends BaseComponentState> extends React.Component<BaseComponentProps, BaseComponentState> {
    var BaseComponent = (function (_super) {
        __extends(BaseComponent, _super);
        function BaseComponent(props, context) {
            var _this = this;
            _super.call(this, props, context);
            this.componentDidMount = function () {
                _this.didMount();
            };
            this.componentWillUnmount = function () {
                _this.willUnmount();
            };
            this.props = props;
            this["state"] = { classes: [] };
        }
        BaseComponent.prototype.didMount = function () {
        };
        BaseComponent.prototype.willUnmount = function () {
        };
        BaseComponent.prototype.refersh = function () {
            this.setState(this.state);
        };
        BaseComponent.prototype.addClassName = function (classNames) {
            var _this = this;
            if (classNames)
                classNames.split(" ").forEach(function (name) {
                    if (_this.state.classes.indexOf(name) === -1)
                        _this.state.classes.push(name);
                });
        };
        BaseComponent.prototype.toggleClassName = function (boolValue, trueClassNames, falseClassNames) {
            if (boolValue) {
                this.addClassName(trueClassNames);
                if (falseClassNames)
                    this.removeClassName(falseClassNames);
            }
            else {
                this.removeClassName(trueClassNames);
                if (falseClassNames)
                    this.addClassName(falseClassNames);
            }
        };
        BaseComponent.prototype.removeClassName = function (classNames) {
            var _this = this;
            if (classNames)
                classNames.split(" ").forEach(function (name) {
                    if (_this.state.classes.indexOf(name) !== -1)
                        _this.state.classes.splice(_this.state.classes.indexOf(name), 1);
                });
        };
        BaseComponent.prototype.renderClassName = function () {
            this.addClassName(this.props.className);
            return this.state.classes.join(" ");
        };
        return BaseComponent;
    }(React.Component));
    Buhta.BaseComponent = BaseComponent;
})(Buhta || (Buhta = {}));
//export var QQQ: String = "qqq-str";
//alert('жопа1-123-==');
/// <reference path="BaseComponent.tsx" />
var Buhta;
(function (Buhta) {
    var App = (function (_super) {
        __extends(App, _super);
        function App(props, context) {
            _super.call(this, props, context);
            this.state = { x3: 0 };
        }
        App.prototype.render = function () {
            return (React.createElement("div", null, "Welcome to SPA application", this.props.children));
        };
        return App;
    }(React.Component));
    Buhta.App = App;
})(Buhta || (Buhta = {}));
/// <reference path="BaseComponent.tsx" />
var Buhta;
(function (Buhta) {
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button(props, context) {
            _super.call(this, props, context);
            //this.state.disabled = false;
        }
        Button.prototype.render = function () {
            this.addClassName("btn");
            this.toggleClassName(this.props.disabled, "disabled");
            return (React.createElement("button", {type: "button", className: this.renderClassName(), onClick: this.props.onClick ? this.props.onClick.bind(this) : null}, this.props.children));
            //Button from {this.props.compiler} and {this.props.framework}!clickCount={this.state.clickCount}
        };
        return Button;
    }(Buhta.BaseComponent));
    Buhta.Button = Button;
})(Buhta || (Buhta = {}));
//export var QQQ: String = "qqq-str";
//alert('жопа1-123-==');
/// <reference path="BaseComponent.tsx" />
var Buhta;
(function (Buhta) {
    (function (InputType) {
        InputType[InputType["Text"] = 0] = "Text";
        InputType[InputType["Number"] = 1] = "Number";
        InputType[InputType["Date"] = 2] = "Date";
    })(Buhta.InputType || (Buhta.InputType = {}));
    var InputType = Buhta.InputType;
    var Input = (function (_super) {
        __extends(Input, _super);
        function Input(props, context) {
            _super.call(this, props, context);
            this.state.text = "";
        }
        Input.prototype.render = function () {
            switch (this.props.type) {
                case InputType.Text:
                    return this.renderText();
                default:
                    throw "Input.render():=> unknown InputType '" + this.props.type + "'";
            }
        };
        Input.prototype.renderText = function () {
            var _this = this;
            var getText = function () {
                if (_this.props.bindObj && _this.props.bindProp) {
                    if (_this.props.bindObj[_this.props.bindProp])
                        return _this.props.bindObj[_this.props.bindProp].toString();
                    else
                        return "";
                }
                else
                    return "<unbinded>";
            };
            var onChange = function (event) {
                if (_this.props.bindObj && _this.props.bindProp)
                    _this.props.bindObj[_this.props.bindProp] = event.target.value;
                _this.setState(_this.state);
            };
            this.addClassName("form-control");
            return (React.createElement("input", {type: "text", className: this.renderClassName(), style: this.props.style, value: getText.bind(this)(), onChange: onChange.bind(this)}));
            //Button from {this.props.compiler} and {this.props.framework}!clickCount={this.state.clickCount}
        };
        return Input;
    }(Buhta.BaseComponent));
    Buhta.Input = Input;
})(Buhta || (Buhta = {}));
//export var QQQ: String = "qqq-str";
//alert('жопа1-123-==');
/// <reference path="BaseComponent.tsx" />
var Buhta;
(function (Buhta) {
    var LayoutPanel = (function (_super) {
        __extends(LayoutPanel, _super);
        function LayoutPanel(props, context) {
            var _this = this;
            _super.call(this, props, context);
            this.componentDidMount = function () {
                _super.prototype.didMount.call(_this);
                $("body").first().replaceWith($(_this.rootElement));
                //            let myLayout = ($(this.rootElement) as any).layout({applyDefaultStyles: true});
                var myLayout = $(_this.rootElement).layout({});
                //  $("div").first().replaceWith('<body>' + $(this.rootElement).html() +'</body>')
                // let myLayout = ($(this.rootElement) as any).layout({
                //
                //     //	reference only - these options are NOT required because 'true' is the default
                //     closable: true	// pane can open & close
                //     , resizable: true	// when open, pane can be resized
                //     , slidable: true	// when closed, pane can 'slide' open over other panes - closes on mouse-out
                //     , livePaneResizing: true
                //
                //     //	some resizing/toggling settings
                //     , north__slidable: false	// OVERRIDE the pane-default of 'slidable=true'
                //     , north__togglerLength_closed: '100%'	// toggle-button is full-width of resizer-bar
                //     , north__spacing_closed: 20		// big resizer-bar when open (zero height)
                //     , south__resizable: false	// OVERRIDE the pane-default of 'resizable=true'
                //     , south__spacing_open: 0		// no resizer-bar when open (zero height)
                //     , south__spacing_closed: 20		// big resizer-bar when open (zero height)
                //
                //     //	some pane-size settings
                //     , west__minSize: 100
                //     , east__size: 300
                //     , east__minSize: 200
                //     , east__maxSize: .5 // 50% of layout width
                //     , center__minWidth: 100
                //
                //     //	some pane animation settings
                //     , west__animatePaneSizing: false
                //     , west__fxSpeed_size: "fast"	// 'fast' animation when resizing west-pane
                //     , west__fxSpeed_open: 1000	// 1-second animation when opening west-pane
                //     , west__fxSettings_open: {easing: "easeOutBounce"} // 'bounce' effect when opening
                //     , west__fxName_close: "none"	// NO animation when closing west-pane
                //
                //     //	enable showOverflow on west-pane so CSS popups will overlap north pane
                //     , west__showOverflowOnHover: true
                //
                //     //	enable state management
                //     , stateManagement__enabled: true // automatic cookie load & save enabled by default
                //
                //     , showDebugMessages: true // log and/or display messages from debugging & testing code
                // });
            };
            //this.state.disabled = false;
        }
        LayoutPanel.prototype.render = function () {
            //this.addClassName("xeeexx");
            //this.toggleClassName(this.props.disabled, "disabled");
            var _this = this;
            if (this.props.renderToBody)
                return (React.createElement("body", {ref: function (e) { return _this.rootElement = e; }, className: this.renderClassName()}, this.props.children));
            else
                return (React.createElement("div", {ref: function (e) { return _this.rootElement = e; }, className: this.renderClassName()}, this.props.children));
        };
        return LayoutPanel;
    }(Buhta.BaseComponent));
    Buhta.LayoutPanel = LayoutPanel;
    (function (PaneRegion) {
        PaneRegion[PaneRegion["Center"] = 0] = "Center";
        PaneRegion[PaneRegion["North"] = 1] = "North";
        PaneRegion[PaneRegion["West"] = 2] = "West";
        PaneRegion[PaneRegion["South"] = 3] = "South";
        PaneRegion[PaneRegion["East"] = 4] = "East";
    })(Buhta.PaneRegion || (Buhta.PaneRegion = {}));
    var PaneRegion = Buhta.PaneRegion;
    var LayoutPane = (function (_super) {
        __extends(LayoutPane, _super);
        function LayoutPane(props, context) {
            _super.call(this, props, context);
            //this.state.disabled = false;
        }
        LayoutPane.prototype.render = function () {
            this.addClassName("ui-layout-" + this.props.region);
            //this.toggleClassName(this.props.disabled, "disabled");
            return (React.createElement("div", {className: this.renderClassName()}, this.props.children));
        };
        return LayoutPane;
    }(Buhta.BaseComponent));
    Buhta.LayoutPane = LayoutPane;
})(Buhta || (Buhta = {}));
/// <reference path="BaseComponent.tsx" />
var Buhta;
(function (Buhta) {
    var Tabs = (function (_super) {
        __extends(Tabs, _super);
        function Tabs(props, context) {
            _super.call(this, props, context);
        }
        Tabs.prototype.createStateTabList = function () {
            this.state.tabs = React.Children.map(this.props.children, (function (child, index) {
                if (Buhta.Util.getReactElementClassName(child) !== "Tab")
                    console.error("only children of type 'Tab' allowed in 'Tabs'");
                return child.props;
            }));
            if (!this.state.tabs)
                this.state.tabs = [];
            this.state.tabs.concat(this.props.tabs);
        };
        Tabs.prototype.render = function () {
            if (!this.state.tabs) {
                this.createStateTabList();
            }
            return (React.createElement("div", {className: this.renderClassName()}, React.createElement("ul", {className: "nav nav-tabs"}, this.state.tabs.map((function (child, index) {
                return (React.createElement("li", {ref: child.id, key: index, className: child.active ? "active" : null}, React.createElement("a", {href: "#" + child.id, "data-toggle": "tab"}, child.title)));
            }))), React.createElement("div", {className: "tab-content"}, this.props.children)));
        };
        return Tabs;
    }(Buhta.BaseComponent));
    Buhta.Tabs = Tabs;
    var Tab = (function (_super) {
        __extends(Tab, _super);
        function Tab(props, context) {
            _super.call(this, props, context);
        }
        //renderTitle(): JSX.Element {
        //    return <span>{this.props.title}</span>;
        //}
        Tab.prototype.render = function () {
            this.addClassName("tab-pane");
            if (this.props.active)
                this.addClassName("active");
            else
                this.removeClassName("active");
            return (React.createElement("div", {className: this.renderClassName(), id: this.props.id}, this.props.children));
        };
        return Tab;
    }(Buhta.BaseComponent));
    Buhta.Tab = Tab;
})(Buhta || (Buhta = {}));
var Buhta;
(function (Buhta) {
    var GridTreeNodeData = (function () {
        function GridTreeNodeData() {
            this.children = [];
            this.data = {};
        }
        Object.defineProperty(GridTreeNodeData.prototype, "rowData", {
            get: function () {
                return this.data.rowData;
            },
            set: function (value) {
                this.data.rowData = value;
            },
            enumerable: true,
            configurable: true
        });
        return GridTreeNodeData;
    }());
    Buhta.GridTreeNodeData = GridTreeNodeData;
    var TreeGrid = (function (_super) {
        __extends(TreeGrid, _super);
        function TreeGrid(props, context) {
            var _this = this;
            _super.call(this, props, context);
            this.componentDidMount = function () {
                _super.prototype.didMount.call(_this);
                var config = {
                    source: _this.props.dataSource
                };
                if (_this.props.onRowDblClick)
                    config.dblclick = function (event, data) {
                        return _this.props.onRowDblClick(data.node.data.rowData);
                    };
                if (_this.props.isNeedConvertFlatDataToTree)
                    config.source = _this.convertFlatDataToTree(config.source);
                _this.fancyTree = $(_this.tableElement).fancytree(config);
            };
            //this.state.disabled = false;
        }
        TreeGrid.prototype.convertFlatDataToTree = function (childList) {
            var parent, nodeMap = {};
            $.each(childList, function (i, c) {
                nodeMap[c.id] = c;
            });
            childList = $.map(childList, function (c) {
                c.key = c.id;
                delete c.id;
                if (c.parent) {
                    parent = nodeMap[c.parent];
                    if (parent.children) {
                        parent.children.push(c);
                    }
                    else {
                        parent.children = [c];
                    }
                    return null;
                }
                return c;
            });
            $.each(childList, function (i, c) {
                if (c.children && c.children.length > 1) {
                    c.children.sort(function (a, b) {
                        return ((a.position < b.position) ? -1 : ((a.position > b.position) ? 1 : 0));
                    });
                }
            });
            return childList;
        };
        TreeGrid.prototype.createStateColumnList = function () {
            if (!this.state.columns) {
                this.state.columns = React.Children.map(this.props.children, (function (child, index) {
                    return child.props;
                }));
            }
        };
        TreeGrid.prototype.render = function () {
            var _this = this;
            this.createStateColumnList();
            //this.addClassName("btn");
            // this.toggleClassName(this.props.disabled, "disabled");
            return (React.createElement("table", {className: this.renderClassName(), ref: function (e) { return _this.tableElement = e; }}, React.createElement("thead", null, React.createElement("tr", null, this.state.columns.map(function (col, index) {
                return (React.createElement("th", {key: index}, " ", col.caption, " "));
            }))), React.createElement("tbody", null, React.createElement("tr", null, this.state.columns.map(function (col, index) {
                return React.createElement("td", {key: index});
            })))));
            //TreeGrid from {this.props.compiler} and {this.props.framework}!clickCount={this.state.clickCount}
        };
        return TreeGrid;
    }(Buhta.BaseComponent));
    Buhta.TreeGrid = TreeGrid;
})(Buhta || (Buhta = {}));
var Buhta;
(function (Buhta) {
    var TreeGridColumn = (function (_super) {
        __extends(TreeGridColumn, _super);
        function TreeGridColumn(props, context) {
            _super.call(this, props, context);
            //this.state.disabled = false;
        }
        TreeGridColumn.prototype.render = function () {
            //this.addClassName("btn");
            //this.toggleClassName(this.props.disabled, "disabled");
            return (null);
            //TreeGrid from {this.props.compiler} and {this.props.framework}!clickCount={this.state.clickCount}
        };
        return TreeGridColumn;
    }(Buhta.BaseComponent));
    Buhta.TreeGridColumn = TreeGridColumn;
})(Buhta || (Buhta = {}));
//# sourceMappingURL=components.js.map