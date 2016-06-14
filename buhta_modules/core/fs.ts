// <reference path="util.ts" />


namespace Buhta {

    let socket = io.connect();

    // export interface ITextFsResult {
    //     error?: string;
    //     text: string;
    // }
    // export function writeTextFile(path: string, filename: string, text: string): JQueryPromise<string> {
    //     return writeTextFile(path + "/" + filename, text);
    // }


    export function writeTextFile(moduleName: string, fileName: string, text: string): JQueryPromise<string> {


        let promise: JQueryDeferred<string>;
        promise = $.Deferred<string>();

        let queryId = "query-" + Math.random().toString(36).slice(2);

        let req = {queryId: queryId, oper: "write", moduleName: moduleName, fileName: fileName, text: text};

        socket.emit("textfile", req);

        socket.once(queryId, (response) => {
            if (response.error) {
                promise.reject(response.error);
            }
            else {
                promise.resolve(response.ok);
            }
        });

        return promise;

    }

    // export function executeSQL(sql: string): JQueryPromise<DataTable> {
    //     //console.log("call SQL.sql.execute");
    //     //return signalR.executeSQL(sql);
    //
    //
    //     let promise: JQueryDeferred<Buhta.DataTable>;
    //     promise = $.Deferred<DataTable>();
    //
    //     //  socket.once('connect',() => {
    //     let queryId = "query-" + Math.random().toString(36).slice(2);
    //     socket.emit("executeSQL", {queryId, sql});
    //     socket.once(queryId, (response) => {
    //         if (response.error) {
    //             promise.reject(response.error);
    //         }
    //         else {
    //             let dataTable = new DataTable();
    //
    //             for (let i = 0; i < response.columns.length; i++) {
    //                 let dataColumn = new DataColumn(dataTable, response.columns[i].name);
    //                 dataTable.columns.push(dataColumn);
    //             }
    //
    //             response.rows.forEach((row) => {
    //
    //                 let dataRow = new DataRow(dataTable);
    //
    //                 for (let i = 0; i < dataTable.columns.length; i++) {
    //                     if (response.columns[i].parse === "D")
    //                         dataRow[dataTable.columns[i].name] = new Date(row[i]);
    //                     else
    //                         dataRow[dataTable.columns[i].name] = row[i];
    //                     //dataRow[i] = row[i];
    //                 }
    //
    //                 dataTable.rows.push(dataRow);
    //             });
    //
    //
    //             promise.resolve(dataTable);
    //         }
    //     });
    //
    //     //   });
    //
    //
    //
    //     return promise;
    //
    // }

    //export enum ColumnDataType { String, Number, Data }

    //export type DataType = string | number;

}