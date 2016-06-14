/// <reference path="../../../typings/index.d.ts" />
/// <reference path="../../core/dist/core.d.ts" />
declare namespace Buhta {
}
declare namespace Buhta {
    interface BaseComponentProps {
        visible?: boolean;
        style?: React.CSSProperties;
        className?: string;
    }
    interface BaseComponentState {
        classes: Array<string>;
    }
    class BaseComponent<P extends BaseComponentProps, S extends BaseComponentState> extends React.Component<P, S> {
        constructor(props: P, context: any);
        protected didMount(): void;
        protected componentDidMount: () => void;
        protected willUnmount(): void;
        protected componentWillUnmount: () => void;
        protected refersh(): void;
        addClassName(classNames: string): void;
        toggleClassName(boolValue: boolean, trueClassNames: string, falseClassNames?: string): void;
        removeClassName(classNames: string): void;
        renderClassName(): string;
    }
}
declare namespace Buhta {
    interface AppProps {
        name: string;
    }
    interface AppState {
        x3: number;
    }
    class App extends React.Component<AppProps, AppState> {
        constructor(props: AppProps, context: any);
        render(): JSX.Element;
    }
}
declare namespace Buhta {
    interface ButtonProps extends BaseComponentProps {
        onClick?: React.ReactEventHandler;
        disabled?: boolean;
    }
    interface ButtonState extends BaseComponentState {
    }
    class Button extends BaseComponent<ButtonProps, ButtonState> {
        constructor(props: ButtonProps, context: any);
        render(): JSX.Element;
    }
}
declare namespace Buhta {
    enum InputType {
        Text = 0,
        Number = 1,
        Date = 2,
    }
    interface InputProps extends BaseComponentProps {
        type?: InputType;
        bindObj?: Object;
        bindProp?: string;
        maxWidth?: number;
        onClick?: React.ReactEventHandler;
    }
    interface InputState extends BaseComponentState {
        text?: string;
    }
    class Input extends BaseComponent<InputProps, InputState> {
        constructor(props: InputProps, context: any);
        render(): JSX.Element;
        renderText(): JSX.Element;
    }
}
declare namespace Buhta {
    interface LayoutPanelProps extends BaseComponentProps {
        renderToBody?: boolean;
    }
    interface LayoutPanelState extends BaseComponentState {
    }
    class LayoutPanel extends BaseComponent<LayoutPanelProps, LayoutPanelState> {
        constructor(props: LayoutPanelProps, context: any);
        rootElement: any;
        protected componentDidMount: () => void;
        render(): JSX.Element;
    }
    enum PaneRegion {
        Center = 0,
        North = 1,
        West = 2,
        South = 3,
        East = 4,
    }
    interface LayoutPaneProps extends BaseComponentProps {
        region: "center" | "north" | "west" | "south" | "east";
    }
    interface LayoutPaneState extends BaseComponentState {
    }
    class LayoutPane extends BaseComponent<LayoutPaneProps, LayoutPaneState> {
        constructor(props: LayoutPaneProps, context: any);
        render(): JSX.Element;
    }
}
declare namespace Buhta {
    interface TabsProps extends BaseComponentProps {
    }
    interface TabsState extends BaseComponentState {
        tabs: TabProps[];
    }
    class Tabs extends BaseComponent<TabsProps, TabsState> {
        constructor(props: TabsProps, context: any);
        createStateTabList(): void;
        render(): JSX.Element;
    }
    interface TabProps extends BaseComponentProps {
        title: string;
        id: string;
        active?: boolean;
    }
    interface TabState extends BaseComponentState {
        active: boolean;
    }
    class Tab extends BaseComponent<TabProps, TabState> {
        constructor(props: TabProps, context: any);
        render(): JSX.Element;
    }
}
declare namespace Buhta {
    class GridTreeNodeData<TRowData> implements Fancytree.NodeData {
        title: string;
        icon: string;
        key: string;
        refKey: string;
        expanded: boolean;
        active: boolean;
        focus: boolean;
        folder: boolean;
        hideCheckbox: boolean;
        lazy: boolean;
        selected: boolean;
        unselectable: boolean;
        children: GridTreeNodeData<TRowData>[];
        tooltip: string;
        extraClasses: string;
        data: any;
        id: number | string;
        parent: number | string;
        rowData: TRowData;
    }
    type TreeGreedDataSource<TRowData> = GridTreeNodeData<TRowData>[];
    interface TreeGridProps<TRowData> extends BaseComponentProps {
        dataSource: TreeGreedDataSource<TRowData>;
        isNeedConvertFlatDataToTree?: boolean;
    }
    interface TreeGridState<TRowData> extends BaseComponentState {
        columns: Array<TreeGridColumnProps>;
    }
    class TreeGrid<TRowData> extends BaseComponent<TreeGridProps<TRowData>, TreeGridState<TRowData>> {
        constructor(props: TreeGridProps<TRowData>, context: any);
        fancyTree: Fancytree.Fancytree;
        protected componentDidMount: () => void;
        convertFlatDataToTree(childList: any): any;
        createStateColumnList(): void;
        tableElement: Element;
        render(): JSX.Element;
    }
}
declare namespace Buhta {
    interface TreeGridColumnProps extends BaseComponentProps {
        caption?: string;
    }
    interface TreeGridColumnState extends BaseComponentState {
    }
    class TreeGridColumn extends BaseComponent<TreeGridColumnProps, TreeGridColumnState> {
        constructor(props: TreeGridColumnProps, context: any);
        render(): JSX.Element;
    }
}
