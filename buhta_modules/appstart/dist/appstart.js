/// <reference path="../../typings/index.d.ts" />
/// <reference path="../core/dist/core.d.ts" />
/// <reference path="../components/dist/components.d.ts" />
/// <reference path="../designer/dist/designer.d.ts" />
/// <reference path="../../typings/index.d.ts" />
/// <reference path="../core/dist/core.d.ts" />
/// <reference path="../components/dist/components.d.ts" />
/// <reference path="../designer/dist/designer.d.ts" />
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
            ReactDOM.render(React.createElement(Buhta.TestPage1, null), document.body);
        });
    });
})(Buhta || (Buhta = {}));
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Buhta;
(function (Buhta) {
    var TestPage1 = (function (_super) {
        __extends(TestPage1, _super);
        function TestPage1(props, context) {
            _super.call(this, props, context);
            this.state = {};
        }
        //this.addClassName();
        TestPage1.prototype.loadDataset = function () {
            var _this = this;
            if (!this.state.dataTable) {
                Buhta.executeSQL("select top 5000 Номер,Название,getdate() дата from ТМЦ order by Ключ")
                    .done(function (table) {
                    alert(table.rows[0].getValue(1));
                    _this.state.dataTable = table;
                    _this.setState(_this.state);
                    _this.forceUpdate();
                })
                    .fail(function (err) {
                    alert(err.message);
                });
            }
        };
        //}
        TestPage1.prototype.renderTable = function () {
            this.loadDataset();
            if (!this.state.dataTable)
                return [React.createElement("div", null, "пусто")];
            else
                return this.state.dataTable.rows.map(function (row) {
                    return React.createElement("div", null, row["Название"]);
                });
        };
        TestPage1.prototype.render = function () {
            return (React.createElement("div", null, "Привет уроды!", this.renderTable()));
        };
        return TestPage1;
    }(React.Component));
    Buhta.TestPage1 = TestPage1;
})(Buhta || (Buhta = {}));
//# sourceMappingURL=appstart.js.map