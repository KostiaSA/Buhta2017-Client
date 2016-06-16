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
                bind: (callback: () => void) => {
                    this.on("activeComponentChange", callback);
                },

                emit: () => {
                    this.emit("activeComponentChange");
                },

                unbind: () => {
                    this.off("activeComponentChange");

                }
            }
        };

        action = {
            openComponent: (compId: string) => {

                let comps = this.openedComponents.filter((c) => c.$$className === compId);
                if (comps.length === 0) {
                    this.openedComponents.push(componentRegistry[compId].createInstance());
                    this.event.openedComponentsChange.emit();
                }

                this.action.setActiveComponent(compId);
            },

            setActiveComponent: (compId: string) => {
                this.activeComponentId = compId;
                this.event.activeComponentChange.emit();
            }

        };

        openedComponents: DesignedComponent[] = [];
        activeComponentId: string;

    }


    // DesignerAppStore.event.openedComponentsChange.bind(() => {
    //
    // });

    export let designerAppDispatcher = new DesignerAppDispatcher();

}