/// <reference path="designedcomponent.tsx" />

namespace Buhta {

    function format1() {

        // return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        //    console.log("g(): called");
        // }//return Reflect.metadata(formatMetadataKey, formatString);
    }



    export class TestComp1 extends DesignedComponent {
        constructor() {
            super();
        }

        id: string;

        name: string;
        sqlName: string;

        проблема: string;


        registerPropertyEditors() {
            super.registerPropertyEditors();
            this.registerPropertyEditor("name", new StringPropertyEditor("Параметры", "Основные", "Имя компонента"));
            this.registerPropertyEditor("sqlname", new StringPropertyEditor("Параметры", "Основные", "sql Имя компонента"));
            this.registerPropertyEditor("проблема", new StringPropertyEditor("Дополнительно", "Группа 1", "Имя 22  компонента"));
        }

        init() {
        }
    }

}