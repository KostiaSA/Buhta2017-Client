/**
 * Created by Kostia on 15.06.2016.
 */


namespace  Buhta {

    export let DesignerAppStore = new DesignerAppStoreStatic();

    export class DesignerAppStoreStatic extends EventEmitter {

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
                this.event.activeComponentChange.emit(comp);
                this.event.openedComponentsChange.emit();
                //  this.emit(this.events.openedComponentsChange);
            }

        }

        openedComponents: ComponentInfo[] = [];

//        emit(event: string, ...args: any[]): boolean;


        bindOpenedComponentsChange(callback: () => void) {
            //on(openedComponentsChangeEvent, callback);
        }

        unbindOpenedComponentsChange() {

        }
    }


    DesignerAppStore.event.openedComponentsChange.bind(() => {

    });

//DesignerAppStore.openComponent.doAction();

//  DesignerAppStore.on()
}