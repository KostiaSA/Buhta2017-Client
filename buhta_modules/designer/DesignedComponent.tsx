/// <reference path="DesignedObject.tsx" />

namespace Buhta {


    export class DesignedComponent extends DesignedObject {
        constructor() {
            super();
        }

        // id: string;
        // name: string;
        $$className: string;
        // inheritFrom: string;
        // moduleName: string;
        // description: string;
        // references: Array<string> = [];

        get $$info(): ComponentInfo {
            return componentRegistry[this.$$className];
        }

        emitTsCode(): string {

            this.registerPropertyEditors();

            let tsCode = new TsCode(this.$$info);

            this.propertyEditors.forEach((editor) => {
                editor.designedObject = this;
                editor.emitTsCode(tsCode, "this");
            });



            return tsCode.getCode();
        }

        // сохранение в проект на сервере
        saveToServer(): JQueryPromise<String> {

            return writeTextFile(this.$$info.moduleName, this.$$info.className + ".ts", this.emitTsCode());
        }

    }

}