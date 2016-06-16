namespace Buhta {

    export var componentRegistry: {[className: string]: ComponentInfo} = {};

    // export function registerComponent(comp: ComponentInfo) {
    //     let compId = comp.moduleName + "." + comp.className;
    //     if (componentRegistry[compId])
    //         console.error("component is already registered: " + compId);
    //     else
    //         componentRegistry[compId] = comp;
    // }

    export function registerComponent(initCallback: (comp: ComponentInfo) => void) {
        let newComp = new ComponentInfo();
        initCallback(newComp);
        if (componentRegistry[newComp.id])
            console.error("component is already registered: " + newComp.id);
        else
            componentRegistry[newComp.id] = newComp;
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

    export class ComponentInfo {
        name: string;
        className: string;
        moduleName: string;
        parent: string;
        inheritFrom: string;
        description: string;
        references: Array<string>;
        createInstance: () => DesignedComponent;
//        private editedInstance: DesignedComponent = null;

        get id(): string {
            return this.moduleName + "." + this.className;
        }
    }

}