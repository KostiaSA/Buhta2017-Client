/// <reference path="DesignedComponent.tsx" />

namespace Buhta {

    export class Module extends DesignedComponent {
        vendor: string;

        registerPropertyEditors() {
            super.registerPropertyEditors();
            this.registerPropertyEditor("vendor", new StringPropertyEditor("Параметры", "Основные", "Автор"));
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
