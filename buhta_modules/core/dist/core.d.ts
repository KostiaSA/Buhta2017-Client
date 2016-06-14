/// <reference path="../../../typings/index.d.ts" />
declare namespace Buhta {
    function executeSQL(sql: string): JQueryPromise<DataTable>;
    class DataTable {
        columns: Array<DataColumn>;
        rows: Array<DataRow>;
        constructor();
    }
    class DataColumn {
        table: DataTable;
        name: string;
        constructor(table: DataTable, name?: string);
    }
    class DataRow {
        table: DataTable;
        [index: string]: any;
        constructor(table: DataTable);
        getValue(columnIndex: number): any;
    }
}
declare namespace Buhta {
    class Util {
        static getReactElementClassName(element: any): string;
    }
}
declare namespace Buhta {
    function writeTextFile(moduleName: string, fileName: string, text: string): JQueryPromise<string>;
}
declare type ObjectWatchCallback = (prop: string, action: string, newValue: any, oldValue: any) => void;
interface Object {
    watch(obj: Object, prop: string, onChange: ObjectWatchCallback): any;
    unwatch(obj: Object, prop: string): any;
}
declare var WatchJS: any;
declare let watchCount: number;
interface String {
    toSql(): string;
    removeLastChars(templateStr: string | number): string;
}
