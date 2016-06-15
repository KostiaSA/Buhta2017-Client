/// <reference path="../../../typings/index.d.ts" />
/// <reference path="../../core/dist/core.d.ts" />
/// <reference path="../../components/dist/components.d.ts" />
declare namespace Buhta {
    class DesignedObject {
        constructor();
        propertyEditors: Array<BasePropertyEditor>;
        registerPropertyEditors(): void;
        registerPropertyEditor(propertyName: string, propertyEditor: BasePropertyEditor): void;
    }
}
declare namespace Buhta {
    class DesignedComponent extends DesignedObject {
        constructor();
        $$className: string;
        $$info: ComponentInfo;
        emitTsCode(): string;
        saveToServer(): JQueryPromise<String>;
    }
}
declare namespace Buhta {
    class Application extends DesignedComponent {
        appName: string;
        registerPropertyEditors(): void;
    }
}
declare namespace Buhta {
    var componentRegistry: {
        [className: string]: ComponentInfo;
    };
    function registerComponent(comp: ComponentInfo): void;
    interface ComponentInfo {
        name: string;
        className: string;
        moduleName: string;
        parent?: string;
        inheritFrom: string;
        description: string;
        references: Array<string>;
        createInstance: () => DesignedComponent;
    }
}
declare namespace Buhta {
    class Module extends DesignedComponent {
        vendor: string;
        registerPropertyEditors(): void;
    }
}
declare namespace Buhta {
    class Table extends DesignedComponent {
        sqlName: string;
        columns: Array<TableColumn>;
        addColumn(initCallback: (newColumn: TableColumn) => void): void;
        registerPropertyEditors(): void;
    }
}
declare namespace Buhta {
    class TableColumn extends DesignedObject {
        table: Table;
        name: string;
        registerPropertyEditors(): void;
    }
}
declare namespace Buhta {
    class TestComp1 extends DesignedComponent {
        constructor();
        id: string;
        name: string;
        sqlName: string;
        проблема: string;
        registerPropertyEditors(): void;
        init(): void;
    }
}
/**
 * Created by Kostia on 15.06.2016.
 */
declare namespace Buhta {
    class DesignerAppDispatcher extends EventEmitter {
        event: {
            openedComponentsChange: {
                bind: (callback: () => void) => void;
                emit: () => void;
                unbind: () => void;
            };
            activeComponentChange: {
                bind: (callback: (activeComp: ComponentInfo) => void) => void;
                emit: (activeComp: ComponentInfo) => void;
                unbind: () => void;
            };
        };
        action: {
            openComponent: (comp: ComponentInfo) => void;
            setActiveComponent: (comp: ComponentInfo) => void;
        };
        openedComponents: ComponentInfo[];
        activeComponent: ComponentInfo;
    }
    let designerAppDispatcher: DesignerAppDispatcher;
}
declare namespace Buhta {
    interface DesignerProps extends BaseComponentProps {
    }
    interface DesignerState extends BaseComponentState {
        designedComponent: DesignedComponent;
        needSave: boolean;
    }
    class Designer extends BaseComponent<DesignerProps, DesignerState> {
        constructor(props: DesignerProps, context: any);
        didMount(): void;
        willUnmount(): void;
        getPagesList(): Array<string>;
        getGroupsList(page: string): Array<string>;
        getEditorsList(page: any, group: string): Array<BasePropertyEditor>;
        renderGroups(page: string): Array<JSX.Element>;
        renderPage(page: string): JSX.Element;
        renderTabs(): Array<JSX.Element>;
        saveButtonClick: () => void;
        render(): JSX.Element;
    }
}
declare namespace Buhta {
    interface DesignerAppProps extends BaseComponentProps {
    }
    interface DesignerAppState extends BaseComponentState {
        projectTabs: DesignerProjectTabsProps;
    }
    class DesignerApp extends BaseComponent<DesignerAppProps, DesignerAppState> {
        constructor(props: DesignerAppProps, context: any);
        render(): JSX.Element;
    }
}
declare namespace Buhta {
    interface DesignerStartPageProps {
    }
    interface DesignerStartPageState {
        text1?: string;
        text2?: string;
    }
    class DesignerStartPage extends React.Component<DesignerStartPageProps, DesignerStartPageState> {
        constructor(props: DesignerStartPageProps, context: any);
        handleChange1(event: React.SyntheticEvent): void;
        handleChange2(event: React.SyntheticEvent): void;
        render(): JSX.Element;
    }
}
declare namespace Buhta {
    class TsCode {
        compInfo: ComponentInfo;
        constructor(compInfo: ComponentInfo);
        constructorCode: string;
        addProperty(assignName: string, propName: string, propType: string, initValue: Object): void;
        addPropertyRaw(assignName: string, propName: string, propType: string, rawInitValue: string): void;
        addRaw(rawInitValue: string): void;
        getCode(): string;
    }
}
declare namespace Buhta {
    interface DesignerProjectTabsProps extends BaseComponentProps {
        comps: ComponentInfo[];
    }
    interface DesignerProjectTabsState extends BaseComponentState {
        tabs: TabProps[];
    }
    class DesignerProjectTabs extends BaseComponent<DesignerProjectTabsProps, DesignerProjectTabsState> {
        constructor(props: DesignerProjectTabsProps, context: any);
        protected willMount(): void;
        protected didMount(): void;
        protected willUnmount(): void;
        private createTabs();
        render(): JSX.Element;
    }
}
declare namespace Buhta {
    interface DesignerProjectTreeProps extends BaseComponentProps {
    }
    interface DesignerProjectTreeState extends BaseComponentState {
    }
    class DesignerProjectTree extends BaseComponent<DesignerProjectTreeProps, DesignerProjectTreeState> {
        constructor(props: DesignerProjectTreeProps, context: any);
        projectDataSource: TreeGridDataSource<ComponentInfo>;
        createProjectDataSource(): void;
        rowDblClick(row: ComponentInfo): boolean;
        render(): JSX.Element;
    }
}
declare namespace Buhta {
    class BasePropertyEditor extends React.Component<Object, Object> {
        propertyPage: string;
        propertyGroup: string;
        propertyDescription: string;
        constructor(propertyPage: string, propertyGroup: string, propertyDescription?: string);
        propertyName: string;
        designedObject: DesignedObject;
        getPropertyType(): string;
        renderEditor(index: number): JSX.Element;
        emitTsCode(tsCode: TsCode, assignName: string): void;
    }
}
declare namespace Buhta {
    class BaseCollectionPropertyEditor extends BasePropertyEditor {
        collectionAddMethodName: string;
        constructor(propertyPage: string, propertyGroup: string, propertyDescription: string, collectionAddMethodName: string);
        emitTsCode(tsCode: TsCode, assignName: string): void;
    }
}
declare namespace Buhta {
    class StringArrayPropertyEditor extends BasePropertyEditor {
        constructor(propertyPage: string, propertyGroup: string, propertyDescription?: string);
        getPropertyType(): string;
        handleChange(event: React.SyntheticEvent): void;
        emitTsCode(tsCode: TsCode, assignName: string): void;
        renderEditor(index: number): JSX.Element;
    }
}
declare namespace Buhta {
    class StringPropertyEditor extends BasePropertyEditor {
        constructor(propertyPage: string, propertyGroup: string, propertyDescription?: string);
        getPropertyType(): string;
        handleChange(event: React.SyntheticEvent): void;
        renderEditor(index: number): JSX.Element;
    }
}
declare namespace Buhta {
    class TableColumnsPropertyEditor extends BaseCollectionPropertyEditor {
        getPropertyType(): string;
        renderEditor(index: number): JSX.Element;
    }
}
