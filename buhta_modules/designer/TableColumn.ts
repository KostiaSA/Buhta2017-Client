namespace Buhta {

    export class TableColumn extends DesignedObject {
        table: Table;
        name: string;

        constructor() {
            super();
            this.$$unwatchedProps.push("table");
        }

        registerPropertyEditors() {
            super.registerPropertyEditors();
            this.registerPropertyEditor("name", new StringPropertyEditor("Параметры", "Основные", "имя колонки"));
        }

    }
}
