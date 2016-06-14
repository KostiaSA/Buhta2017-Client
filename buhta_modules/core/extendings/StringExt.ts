/// <reference path="../references.ts" />

interface String {
    toSql(): string;
    removeLastChars(templateStr: string|number): string;

}

String.prototype.toSql = function () {
    return this + "-tosql";
};

String.prototype.removeLastChars = (templateStr: string|number): string => {
    if (_.isString(this)) {
        if (_.endsWith(this, <string>templateStr))
            return this.substring(0, this.length - (<string>templateStr).length);
        else
            return this;
    }
    else {
        this.substring(0, this.length - <number>templateStr);
    }
};
