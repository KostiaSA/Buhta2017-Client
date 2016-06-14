/// <reference path="DesignedComponent.tsx" />

namespace Buhta {

    export class Table extends DesignedComponent {
        sqlName: string;
        columns: Array<TableColumn> = [];

        addColumn(initCallback: (newColumn: TableColumn) => void) {
            let col = new TableColumn();
            col.table = this;
            this.columns.push(col);
            initCallback(col);
        }

        registerPropertyEditors() {
            super.registerPropertyEditors();
            this.registerPropertyEditor("sqlName", new StringPropertyEditor("Параметры", "Основные", "sql имя таблицы"));
            this.registerPropertyEditor("columns", new TableColumnsPropertyEditor("Колонки", "", "Колонки таблицы", "addColumn"));
        }

    }

    // componentRegistry["Buhta.Table"] = {
    //     id: '',
    //     name: '',
    //     className: '',
    //     moduleName: '',
    //     inheritFrom: '',
    //     description: '',
    //
    // }

}
