/// <reference path="../../../typings/index.d.ts" />
declare namespace Buhta {
    class Keycode {
        static Esc: string;
        static Down: string;
    }
}
/**
 * Normaliz22223--44422ation of deprecated HTML5 `key` values
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */
declare var normalizeKey: {
    'Esc': string;
    'Spacebar': string;
    'Left': string;
    'Up': string;
    'Right': string;
    'Down': string;
    'Del': string;
    'Win': string;
    'Menu': string;
    'Apps': string;
    'Scroll': string;
    'MozPrintableKey': string;
};
/**
 * Translation from legacy `keyCode` to HTML5 `key`
 * Only special keys supported, all others depend on keyboard layout or browser
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */
declare var translateToKey: {
    8: string;
    9: string;
    12: string;
    13: string;
    16: string;
    17: string;
    18: string;
    19: string;
    20: string;
    27: string;
    32: string;
    33: string;
    34: string;
    35: string;
    36: string;
    37: string;
    38: string;
    39: string;
    40: string;
    45: string;
    46: string;
    112: string;
    113: string;
    114: string;
    115: string;
    116: string;
    117: string;
    118: string;
    119: string;
    120: string;
    121: string;
    122: string;
    123: string;
    144: string;
    145: string;
    224: string;
};
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
