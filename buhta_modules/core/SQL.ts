// <reference path="util.ts" />


namespace Buhta {

    let socket = io.connect();

    export function executeSQL(sql: string): JQueryPromise<DataTable> {
        //console.log("call SQL.sql.execute");
        //return signalR.executeSQL(sql);


        let promise: JQueryDeferred<Buhta.DataTable>;
        promise = $.Deferred<DataTable>();

        //  socket.once('connect',() => {
        let queryId = "query-" + Math.random().toString(36).slice(2);
        socket.emit("executeSQL", {queryId, sql});
        socket.once(queryId, (response) => {
            if (response.error) {
                promise.reject(response.error);
            }
            else {
                let dataTable = new DataTable();

                for (let i = 0; i < response.columns.length; i++) {
                    let dataColumn = new DataColumn(dataTable, response.columns[i].name);
                    dataTable.columns.push(dataColumn);
                }

                response.rows.forEach((row) => {

                    let dataRow = new DataRow(dataTable);

                    for (let i = 0; i < dataTable.columns.length; i++) {
                        if (response.columns[i].parse === "D")
                            dataRow[dataTable.columns[i].name] = new Date(row[i]);
                        else
                            dataRow[dataTable.columns[i].name] = row[i];
                        //dataRow[i] = row[i];
                    }

                    dataTable.rows.push(dataRow);
                });


                promise.resolve(dataTable);
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

    //export enum ColumnDataType { String, Number, Data }

    //export type DataType = string | number;

    export class DataTable {
        columns: Array<DataColumn>;
        rows: Array<DataRow>;

        constructor() {
            this.columns = [];
            this.rows = [];
        }
    }

    export class DataColumn {
        name: string;
        //dataType: ColumnDataType;
        constructor(public table: DataTable, name?: string) {
            this.name = name;

        }
    }


    export class DataRow {
        [index: string]: any;
        constructor(public table: DataTable) {
        }

        getValue(columnIndex: number): any {
            if (columnIndex < 0 || columnIndex >= this.table.columns.length)
                throw "DataRow.getValue(" + columnIndex + "): columnIndex out of range";

            return [this.table.columns[columnIndex].name];
        }

        //[index: number]: DataType;
    }

}