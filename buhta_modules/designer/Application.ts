/// <reference path="DesignedComponent.tsx" />

namespace Buhta {

    export class Application extends DesignedComponent {
        appName: string;

        registerPropertyEditors() {
            super.registerPropertyEditors();
            this.registerPropertyEditor("appName", new StringPropertyEditor("Параметры", "Основные", "Название приложения"));
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
