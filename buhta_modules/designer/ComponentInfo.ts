namespace Buhta {

    export var componentRegistry: {[className: string]: ComponentInfo} = {};

    export function registerComponent(comp: ComponentInfo) {
        let compId = comp.moduleName + "." + comp.className;
        if (componentRegistry[compId])
            console.error("component is already registered: " + compId);
        else
            componentRegistry[compId] = comp;
    }

    // export function registerComponent(id: string, name: string, className: string, moduleName: string,
    //                                   inheritFrom: string, description: string) {
    //     let rc = new ComponentInfo();
    //     rc.id = id;
    //     rc.name = name;
    //     rc.className = className;
    //     rc.moduleName = moduleName;
    //     rc.inheritFrom = inheritFrom;
    //     rc.description = description;
    //     componentRegistry[className] = rc;
    // }

    export interface ComponentInfo {
        name: string;
        className: string;
        moduleName: string;
        parent?: string;
        inheritFrom: string;
        description: string;
        references: Array<string>;
        createInstance: () => DesignedComponent;
        editedInstance?: DesignedComponent;
    }

}