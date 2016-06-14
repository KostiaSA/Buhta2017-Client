

namespace Buhta {


  //  declare var Binder;

    export class DesignedObject {
        constructor() {
        }

        // id: string;
        // name: string;
        // className: string;
        // inheritFrom: string;
        // moduleName: string;
        // references: Array<string> = [];

        propertyEditors: Array<BasePropertyEditor> = [];

        registerPropertyEditors() {
            this.propertyEditors.length = 0;
        }


        registerPropertyEditor(propertyName: string, propertyEditor: BasePropertyEditor) {
            propertyEditor.designedObject = this;
            propertyEditor.propertyName = propertyName;
            this.propertyEditors.push(propertyEditor);
        }

        // emitTsCode(): string {
        //
        //     this.registerPropertyEditors();
        //
        //     let tsCode = new TsCode(this.moduleName, this.className, this.inheritFrom, this.references);
        //
        //     this.propertyEditors.forEach((editor) => {
        //         editor.designedObject = this;
        //         editor.emitTsCode(tsCode);
        //     });
        //
        //     return tsCode.getCode();
        // }

    }

}