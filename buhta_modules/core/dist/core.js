// <reference path="util.ts" />
var Buhta;
(function (Buhta) {
    var socket = io.connect();
    function executeSQL(sql) {
        //console.log("call SQL.sql.execute");
        //return signalR.executeSQL(sql);
        var promise;
        promise = $.Deferred();
        //  socket.once('connect',() => {
        var queryId = "query-" + Math.random().toString(36).slice(2);
        socket.emit("executeSQL", { queryId: queryId, sql: sql });
        socket.once(queryId, function (response) {
            if (response.error) {
                promise.reject(response.error);
            }
            else {
                var dataTable_1 = new DataTable();
                for (var i = 0; i < response.columns.length; i++) {
                    var dataColumn = new DataColumn(dataTable_1, response.columns[i].name);
                    dataTable_1.columns.push(dataColumn);
                }
                response.rows.forEach(function (row) {
                    var dataRow = new DataRow(dataTable_1);
                    for (var i = 0; i < dataTable_1.columns.length; i++) {
                        if (response.columns[i].parse === "D")
                            dataRow[dataTable_1.columns[i].name] = new Date(row[i]);
                        else
                            dataRow[dataTable_1.columns[i].name] = row[i];
                    }
                    dataTable_1.rows.push(dataRow);
                });
                promise.resolve(dataTable_1);
            }
        });
        //   });
        //signalR.executeSQL(sql).
        //    done((result) => {
        //        let res = eval(result);
        //        if (res.error) {
        //            promise.reject(res.error);
        //        }
        //        else {
        //            let ds = new Dataset();
        //            res.tables.forEach((table) => {
        //                let dataTable = new DataTable(ds);
        //                dataTable.name = table.name;
        //                ds.tables.push(dataTable);
        //                for (var i = 0; i < table.columns.length; i++) {
        //                    let dataColumn = new DataColumn(dataTable, table.columns[i].name);
        //                    dataTable.columns.push(dataColumn);
        //                }
        //                table.rows.forEach((row) => {
        //                    let dataRow = new DataRow();
        //                    for (var i = 0; i < table.columns.length; i++) {
        //                        dataRow[table.columns[i].name] = row[i];
        //                        dataRow[i] = row[i];
        //                    }
        //                    dataTable.rows.push(dataRow);
        //                });
        //            });
        //            promise.resolve(ds)
        //        }
        //    }).
        //    fail(() => {
        //        promise.reject("ошибка connection signalR");
        //    });
        return promise;
    }
    Buhta.executeSQL = executeSQL;
    //export enum ColumnDataType { String, Number, Data }
    //export type DataType = string | number;
    var DataTable = (function () {
        function DataTable() {
            this.columns = [];
            this.rows = [];
        }
        return DataTable;
    }());
    Buhta.DataTable = DataTable;
    var DataColumn = (function () {
        //dataType: ColumnDataType;
        function DataColumn(table, name) {
            this.table = table;
            this.name = name;
        }
        return DataColumn;
    }());
    Buhta.DataColumn = DataColumn;
    var DataRow = (function () {
        function DataRow(table) {
            this.table = table;
        }
        DataRow.prototype.getValue = function (columnIndex) {
            if (columnIndex < 0 || columnIndex >= this.table.columns.length)
                throw "DataRow.getValue(" + columnIndex + "): columnIndex out of range";
            return [this.table.columns[columnIndex].name];
        };
        return DataRow;
    }());
    Buhta.DataRow = DataRow;
})(Buhta || (Buhta = {}));
// <reference path="schema/schemaobject.ts" />
//namespace buhta {
//    export class SchemaTableColumn {
//        sqlname: string;
//        SchemaTable; extends: SchemaTable;
//        load() {
//            let xx = new SchemaTable();
//        }
//    }
//    export class SchemaTable extends SchemaObject {
//        sqlname: string;
//        column: Array<SchemaTableColumn>;
//        load2() {
//            let xx = new SchemaTableColumn();
//        }
//    }
//} 
var Buhta;
(function (Buhta) {
    var Util = (function () {
        function Util() {
        }
        Util.getReactElementClassName = function (element) {
            return element && element.type ? element.type.toString().split("(")[0].split(" ")[1] : "";
        };
        return Util;
    }());
    Buhta.Util = Util;
})(Buhta || (Buhta = {}));
// глобальные переменные приложения
// <reference path="util.ts" />
var Buhta;
(function (Buhta) {
    var socket = io.connect();
    // export interface ITextFsResult {
    //     error?: string;
    //     text: string;
    // }
    // export function writeTextFile(path: string, filename: string, text: string): JQueryPromise<string> {
    //     return writeTextFile(path + "/" + filename, text);
    // }
    function writeTextFile(moduleName, fileName, text) {
        var promise;
        promise = $.Deferred();
        var queryId = "query-" + Math.random().toString(36).slice(2);
        var req = { queryId: queryId, oper: "write", moduleName: moduleName, fileName: fileName, text: text };
        socket.emit("textfile", req);
        socket.once(queryId, function (response) {
            if (response.error) {
                promise.reject(response.error);
            }
            else {
                promise.resolve(response.ok);
            }
        });
        return promise;
    }
    Buhta.writeTextFile = writeTextFile;
})(Buhta || (Buhta = {}));
/// <reference path="../../typings/index.d.ts" />
/// <reference path="../../typings/index.d.ts" />
var _this = this;
// const objectWatchersListProp = "ije4xlupxsadr3mybf1ug14i";
// const objectWatchersTimeIdProp = "fpbvyxhfpo5zjsiiizhcnxw29";
// const watchPeriod = 2000;
//
// Object.defineProperty(Object.prototype, "watchProp",
//     {
//         writable: false,
//         configurable: false,
//         enumerable: false,
//         value: (prop: string, onChange: ObjectWatchCallback) => {
//             if (!this[objectWatchersListProp])
//                 this[objectWatchersListProp] = [];
//
//             let watchersList = this[objectWatchersListProp] as Array<ObjectWatchCallbackRecord>;
//
//             let lastValue: any = this[prop];
//             if (!lastValue)
//                 lastValue = eval("this." + prop);
//
//             watchersList.push({prop: prop, lastValue: lastValue, callback: onChange});
//             if (!this[objectWatchersTimeIdProp]) {
//                 this[objectWatchersTimeIdProp] = setInterval(() => {
//                     watchersList.forEach((watcher) => {
//                         console.log("check prop: " + watcher.prop);
//                         let oldValue = watcher.lastValue;
//                         let newValue = this[watcher.prop];
//                         if (!newValue)
//                             newValue = eval("this." + watcher.prop);
//                         if (newValue !== oldValue) {
//                             console.log("new prop: " + watcher.prop);
//                             watcher.lastValue = newValue;
//                             watcher.callback(watcher.prop, oldValue, newValue);
//                         }
//                     });
//
//                 }, watchPeriod);
//             }
//             // WatchJS.watch(this, prop, onChange);
//         }
//     });
var watchCount = 0;
Object.defineProperty(Object.prototype, "watch", {
    writable: false,
    configurable: false,
    enumerable: false,
    value: function (prop, onChange) {
        WatchJS.watch(_this, prop, onChange);
        watchCount++;
        console.log(prop);
        console.log(_this);
        console.log("start watch: " + watchCount);
    }
});
/// <reference path="../references.ts" />
var _this = this;
String.prototype.toSql = function () {
    return this + "-tosql";
};
String.prototype.removeLastChars = function (templateStr) {
    if (_.isString(_this)) {
        if (_.endsWith(_this, templateStr))
            return _this.substring(0, _this.length - templateStr.length);
        else
            return _this;
    }
    else {
        _this.substring(0, _this.length - templateStr);
    }
};
//namespace buhta {
//    interface ITodoItemProps {
//    }
//    interface ITodoItemState {
//    }
//    class App extends React.Component<ITodoItemProps, ITodoItemState> {
//        public state: ITodoItemState;
//        constructor(props: ITodoItemProps) {
//            super(props);
//            //this.state = { editText: this.props.todo.title };
//        }
//        public render() {
//            return (
//                <button>ok this App </button>
//            );
//        }
//    }
//} 
//# sourceMappingURL=core.js.map