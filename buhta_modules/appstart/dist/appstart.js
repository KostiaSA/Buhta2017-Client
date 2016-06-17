/// <reference path="../../typings/index.d.ts" />
/// <reference path="../core/dist/core.d.ts" />
/// <reference path="../components/dist/components.d.ts" />
/// <reference path="../designer/dist/designer.d.ts" />
/// <reference path="../../typings/index.d.ts" />
/// <reference path="../core/dist/core.d.ts" />
/// <reference path="../components/dist/components.d.ts" />
/// <reference path="../designer/dist/designer.d.ts" />
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
    var AComponent = (function (_super) {
        __extends(AComponent, _super);
        function AComponent(props, context) {
            var _this = this;
            _super.call(this, props, context);
            this.componentDidMount = function () {
                _this.didMount();
            };
            this.componentWillMount = function () {
                _this.willMount();
            };
            this.componentWillReceiveProps = function (nextProps) {
                _this.willReceiveProps(nextProps);
            };
            this.componentDidUpdate = function (prevProps, prevState, prevContext) {
                _this.didUpdate(prevProps, prevState, prevContext);
            };
            this.componentWillUnmount = function () {
                _this.willUnmount();
            };
            this.props = props;
            this["state"] = { classes: [], style: {} };
        }
        AComponent.prototype.didMount = function () {
        };
        AComponent.prototype.willMount = function () {
        };
        AComponent.prototype.willUnmount = function () {
        };
        AComponent.prototype.willReceiveProps = function (nextProps) {
        };
        AComponent.prototype.didUpdate = function (prevProps, prevState, prevContext) {
        };
        AComponent.prototype.refersh = function () {
            this.setState(this.state);
        };
        AComponent.prototype.addClassName = function (classNames) {
            var _this = this;
            if (classNames)
                classNames.split(" ").forEach(function (name) {
                    if (_this.state.classes.indexOf(name) === -1)
                        _this.state.classes.push(name);
                });
        };
        AComponent.prototype.toggleClassName = function (boolValue, trueClassNames, falseClassNames) {
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
        AComponent.prototype.removeClassName = function (classNames) {
            var _this = this;
            if (classNames)
                classNames.split(" ").forEach(function (name) {
                    if (_this.state.classes.indexOf(name) !== -1)
                        _this.state.classes.splice(_this.state.classes.indexOf(name), 1);
                });
        };
        AComponent.prototype.renderClassName = function () {
            this.addClassName(this.props.className);
            return this.state.classes.join(" ");
        };
        return AComponent;
    }(React.Component));
    Buhta.AComponent = AComponent;
})(Buhta || (Buhta = {}));
//export var QQQ: String = "qqq-str";
//alert('жопа1-123-==');
var Buhta;
(function (Buhta) {
    var APanel = (function (_super) {
        __extends(APanel, _super);
        function APanel(props, context) {
            _super.call(this, props, context);
            //            this.state = {css: {}};
        }
        APanel.prototype.handleMouseDown = function (event) {
            this.state.dragState = {
                mouseDownLeft: event.pageX,
                mouseDownTop: event.pageY,
                oldTop: this.state.style.top,
                oldLeft: this.state.style.left,
                mouseMoveHandler: this.handleMouseMove.bind(this)
            };
            addEventListener("mousemove", this.state.dragState.mouseMoveHandler);
        };
        ;
        APanel.prototype.handleMouseUp = function (event) {
            window.removeEventListener("mousemove", this.state.dragState.mouseMoveHandler);
            delete this.state.dragState;
        };
        ;
        APanel.prototype.handleMouseMove = function (event) {
            if (this.state.dragState) {
                var x = event.pageX - this.state.dragState.mouseDownLeft;
                var y = event.pageY - this.state.dragState.mouseDownTop;
                this.state.left = this.state.dragState.oldLeft + x;
                this.state.top = this.state.dragState.oldTop + y;
                this.setState(this.state);
            }
        };
        ;
        APanel.prototype.render = function () {
            this.state.style = this.props.style || {};
            this.state.style.top = this.state.top || this.state.style.top || this.props.top;
            this.state.style.left = this.state.left || this.state.style.left || this.props.left;
            this.state.style.height = this.state.height || this.state.style.height || this.props.height;
            this.state.style.position = this.props.position;
            if (!this.state.style.position && (this.state.style.top || this.state.style.left))
                this.state.style.position = "relative";
            // if (this.state.style.height && !this.state.style.display) {
            //     if (this.state.style.display)
            // }
            if (this.props.isDraggable) {
                this.state.onMouseDown = this.handleMouseDown.bind(this);
                this.state.onMouseUp = this.handleMouseUp.bind(this);
            }
            else {
                delete this.state.onMouseDown;
                delete this.state.onMouseUp;
            }
            return (React.createElement("span", {className: "apanel", style: this.state.style, onMouseDown: this.state.onMouseDown, onMouseUp: this.state.onMouseUp}, "Привет уроды 23!", this.props.children));
        };
        return APanel;
    }(Buhta.AComponent));
    Buhta.APanel = APanel;
})(Buhta || (Buhta = {}));
/// <reference path="references.ts" />
var socket = io.connect();
var Buhta;
(function (Buhta) {
    socket.once('connect', function () {
        $(document).ready(function () {
            //  sok?      var socket = io.connect({ host: "localhost", port: "3010" });
            console.log('cooned');
            $(".squel").click(function () {
                var ms = Knex({
                    dialect: 'mssql'
                });
                var x = new Date();
                // var sql = ms.select('Номер', 'Название', ms.raw('1213 as uu ')).from('ТМЦ').where("x", "<>", x).limit(5).toString();
                //alert(sql);
                var sql1 = ms.select('Номер', 'Название', ms.raw('1213 as uu ')).from('ТМЦ').where("x", "<>", x).limit(5);
                var queryId = 'q' + Math.random().toString(36).slice(2);
                socket.emit("executeSQL", { queryId: queryId, sql: "sql1" });
                //let squelPostgres = squel.useFlavour('mssql');
                //console.log(???
                //    squelPostgres.insert({ autoQuoteFieldNames: true })
                //        .into('table')
                //        .set('field', 5)
                //        .set('мама 5', 5)
                //      //  .returning('*')
                //        .toParam()
                //);
            });
            $(".test-table").click(function () {
                // componentRegistry["Buhta.Org"] = {
                //     className: "Org",
                //     inheritFrom: "Buhta.Table",
                //     name: "Тестовый компонент 12",
                //     moduleName: "TestModule",
                //     references: ["references.ts", "testcomp2.ts"],
                //     description: "это тестовый компонент таблицы Организация",
                //     createInstance: null
                // };
                var x = new Buhta.Table();
                x.$$className = "Buhta.Org";
                x.addColumn(function (col) {
                    col.name = "Номер";
                });
                x.addColumn(function (col) {
                    col.name = "Название";
                });
                x.addColumn(function (col) {
                    col.name = "Город";
                });
                x.sqlName = "Организация";
                x.saveToServer()
                    .done(function () {
                    alert("ok!");
                })
                    .fail(function (err) {
                    alert(err);
                });
            });
            //let x = new SchemaTable();
            //x.name = "жопа";
            //x.sqlname = "sql-жопа";
            $(".but").click(function () {
                // let x = new TestComp1();
                //
                // x.className = "TestComp1";
                // x.inheritFrom = "TestComp2";
                // //x.inheritFrom = "Buhta.DesignedComponent";
                //
                // x.name = "Тестовый компонент 12";
                // x.sqlName = "sql база ps-web";
                // x.moduleName = "TestModule";
                // x.references = ["references.ts", "testcomp2.ts"];
                //
                // writeTextFile(x.moduleName, x.className + ".ts", x.emitTsCode())
                //     .done(() => {
                //         alert("все хорошо!");
                //     })
                //     .fail((err) => {
                //         alert(err);
                //     });
                //
                // alert(x.emitTsCode());
                // for (let i: number = 0; i < 10000; i++) {
                Buhta.executeSQL("select top 10 Номер,Название,getdate() дата from ТМЦ order by Ключ")
                    .done(function (table) {
                    alert(table.rows[0].getValue(1));
                })
                    .fail(function (err) {
                    alert(err.message);
                });
                //}
            });
            //        $(".but").click(() => {
            //            var queryId = 'q' + Math.random().toString(36).slice(2);
            ////            socket.emit("executeSQL", { queryId: queryId, sql: "select top 10 Номер, Название, Ключ, getdate() from ТМЦ" });
            //            socket.emit("executeSQL", { queryId: queryId, sql: "select top 100 getdate() дата, 0x010101010202020204040404 image, номер from ТМЦ" });
            //            socket.once(queryId, (rows) => {
            //                alert('get rows');
            //            });
            //        });
            //alert(x.sqlname + x.coreName);
            // ReactDOM.render(
            //     <App name="Buhta 2017">
            //         <DesignerStartPage>
            //         </DesignerStartPage>
            //
            //     </App>,
            //     document.getElementById("content")
            // );
            // ReactDOM.renderComponent(null, document.body);
            // ReactDOM.render(
            //     <DesignerApp>
            //
            //     </DesignerApp>,
            //     document.body
            // );
            ReactDOM.render(React.createElement("div", null, React.createElement("div", {id: "button33"}), React.createElement(Buhta.APanel, {top: 20, left: 40, isDraggable: true}, "нет"), React.createElement(Buhta.APanel, {top: 70, left: 140, height: 200, isDraggable: true})), document.body);
            $("#button33").dxButton({
                text: 'Click me',
                onClick: function () {
                    console.log('Button clicked');
                }
            });
        });
    });
})(Buhta || (Buhta = {}));
var Buhta;
(function (Buhta) {
    var TestPage1 = (function (_super) {
        __extends(TestPage1, _super);
        function TestPage1(props, context) {
            _super.call(this, props, context);
            //}
            this.maxRows = 0;
            this.state = {};
        }
        //this.addClassName();
        TestPage1.prototype.loadDataset = function () {
            var _this = this;
            if (!this.state.dataTable) {
                Buhta.executeSQL("select top 1000 Номер,Название,getdate() дата from ТМЦ order by Ключ")
                    .done(function (table) {
                    alert(table.rows[0].getValue(1));
                    _this.state.dataTable = table;
                    //this.setState(this.state);
                    //this.forceUpdate();
                })
                    .fail(function (err) {
                    alert(err.message);
                });
            }
        };
        TestPage1.prototype.partialLoad = function () {
            this.maxRows += 200000;
            console.log("load " + this.maxRows);
            if (this.maxRows < this.state.dataTable.rows.length) {
                setTimeout(this.partialLoad.bind(this), 10);
            }
            this.forceUpdate();
        };
        TestPage1.prototype.renderTable = function () {
            var _this = this;
            this.loadDataset();
            //console.log("render start");
            if (!this.state.dataTable)
                return [React.createElement("div", null, "пусто")];
            else {
                var x = this.state.dataTable.rows
                    .filter(function (row, index) {
                    return index < _this.maxRows;
                })
                    .map(function (row) {
                    return React.createElement("div", null, React.createElement("span", null, row["Номер"]), " ", React.createElement("span", null, row["Название"]), React.createElement("span", null, row["Номер"]), " ", React.createElement("span", null, row["Название"]), " ");
                });
                //  console.log("render end");
                return x;
            }
        };
        TestPage1.prototype.render = function () {
            return (React.createElement("div", null, "Привет уроды 23!", React.createElement("button", {onClick: this.partialLoad.bind(this)}, "render ", this.maxRows), this.renderTable()));
        };
        return TestPage1;
    }(React.Component));
    Buhta.TestPage1 = TestPage1;
})(Buhta || (Buhta = {}));
//# sourceMappingURL=appstart.js.map