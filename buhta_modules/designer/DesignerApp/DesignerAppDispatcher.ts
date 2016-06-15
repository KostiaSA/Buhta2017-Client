/**
 * Created by Kostia on 15.06.2016.
 */


namespace  Buhta {


    export class DesignerAppDispatcher extends EventEmitter {

        event = {

            openedComponentsChange: {
                bind: (callback: () => void) => {
                    this.on("openedComponentsChange", callback);

                },

                emit: () => {
                    this.emit("openedComponentsChange");
                },

                unbind: () => {
                    this.off("openedComponentsChange");

                }
            },

            activeComponentChange: {
                bind: (callback: (activeComp: ComponentInfo) => void) => {
                    this.on("activeComponentChange", callback);
                },

                emit: (activeComp: ComponentInfo) => {
                    this.emit("activeComponentChange", activeComp);
                },

                unbind: () => {
                    this.off("activeComponentChange");

                }
            }
        };

        action = {
            openComponent: (comp: ComponentInfo) => {

                let comps = this.openedComponents.filter((c) => c.moduleName === comp.moduleName && c.className === comp.className);
                if (comps.length === 0) {
                    this.openedComponents.push(comp);
                    this.event.openedComponentsChange.emit();
                }
                else
                    comp = comps[0];

                this.action.setActiveComponent(comp);
            },

            setActiveComponent: (comp: ComponentInfo) => {
                let comps = this.openedComponents.filter((c) => c.moduleName === comp.moduleName && c.className === comp.className);
                if (comps.length > 0) {
                    this.event.activeComponentChange.emit(comp);
                    this.activeComponent = comp;
                }
            }

        };

        openedComponents: ComponentInfo[] = [];
        activeComponent: ComponentInfo;

    }


    // DesignerAppStore.event.openedComponentsChange.bind(() => {
    //
    // });

    export let designerAppDispatcher = new DesignerAppDispatcher();

}