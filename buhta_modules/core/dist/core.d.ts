/// <reference path="../../../typings/index.d.ts" />
declare namespace Buhta {
    var Keycode: {
        Esc: string;
        Space: string;
        Left: string;
        Up: string;
        Down: string;
        Right: string;
        Del: string;
        Ins: string;
        Win: string;
        Menu: string;
        Scroll: string;
        Num: string;
        Backspace: string;
        Tab: string;
        Enter: string;
        Shift: string;
        Control: string;
        Alt: string;
        Break: string;
        CapsLock: string;
        PageUp: string;
        PageDown: string;
        End: string;
        Home: string;
        F1: string;
        F2: string;
        F3: string;
        F4: string;
        F5: string;
        F6: string;
        F7: string;
        F8: string;
        F9: string;
        F10: string;
        F11: string;
        F12: string;
    };
}
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
