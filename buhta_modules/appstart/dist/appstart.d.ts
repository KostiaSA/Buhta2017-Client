/// <reference path="../../../typings/index.d.ts" />
/// <reference path="../../core/dist/core.d.ts" />
/// <reference path="../../components/dist/components.d.ts" />
/// <reference path="../../designer/dist/designer.d.ts" />
declare namespace Buhta {
    interface AComponentProps {
        visible?: boolean;
        style?: React.CSSProperties;
        className?: string;
    }
    interface AComponentState {
        classes: Array<string>;
        style: React.CSSProperties;
    }
    class AComponent<P extends AComponentProps, S extends AComponentState> extends React.Component<P, S> {
        constructor(props: P, context: any);
        protected didMount(): void;
        private componentDidMount;
        protected willMount(): void;
        private componentWillMount;
        protected willUnmount(): void;
        private componentWillReceiveProps;
        protected willReceiveProps(nextProps: P): void;
        private componentDidUpdate;
        protected didUpdate(prevProps: P, prevState: S, prevContext: any): void;
        private componentWillUnmount;
        protected refersh(): void;
        addClassName(classNames: string): void;
        toggleClassName(boolValue: boolean, trueClassNames: string, falseClassNames?: string): void;
        removeClassName(classNames: string): void;
        renderClassName(): string;
    }
}
declare namespace Buhta {
    type CSS_position = "relative" | "absolute" | "fixed";
    type CSS_display = "none" | "block" | "initial";
    interface APanelProps extends AComponentProps {
        top?: number;
        left?: number;
        width?: number;
        height?: number;
        position?: CSS_position;
        isDraggable?: boolean;
    }
    interface DragState {
        mouseDownTop: number;
        mouseDownLeft: number;
        oldTop: number;
        oldLeft: number;
        mouseMoveHandler: any;
    }
    interface APanelState extends AComponentState {
        onMouseDown?: React.MouseEventHandler;
        onMouseUp?: React.MouseEventHandler;
        dragState?: DragState;
        top?: number;
        left?: number;
        height?: number;
        display?: CSS_position;
    }
    class APanel extends AComponent<APanelProps, APanelState> {
        constructor(props: APanelProps, context: any);
        handleMouseDown(event: any): void;
        handleMouseUp(event: any): void;
        handleMouseMove(event: any): void;
        render(): JSX.Element;
    }
}
declare var ReactDOM: any;
declare var socket: SocketIOClient.Socket;
declare namespace Buhta {
}
declare namespace Buhta {
    interface TestPage1Props {
    }
    interface TestPage1State {
        dataTable?: DataTable;
    }
    class TestPage1 extends React.Component<TestPage1Props, TestPage1State> {
        constructor(props: TestPage1Props, context: any);
        loadDataset(): void;
        maxRows: number;
        partialLoad(): void;
        renderTable(): JSX.Element[];
        render(): JSX.Element;
    }
}
declare namespace Buhta {
    interface XVisibleProps {
        visible?: boolean;
    }
    interface XOnClickProps {
        onClick?: React.ReactEventHandler;
    }
    interface XComponentProps extends XVisibleProps {
        style?: React.CSSProperties;
        className?: string;
    }
    interface XComponentState {
    }
    class XComponent<P extends XComponentProps, S extends XComponentState> extends React.Component<P, S> {
        constructor(props: P, context: any);
        renderClasses: string[];
        renderProps: any;
        protected didMount(): void;
        private componentDidMount;
        protected willMount(): void;
        private componentWillMount;
        protected willUnmount(): void;
        private componentWillReceiveProps;
        protected willReceiveProps(nextProps: P): void;
        private componentDidUpdate;
        protected didUpdate(prevProps: P, prevState: S, prevContext: any): void;
        private componentWillUnmount;
        addClassName(classNames: string): void;
        toggleClassName(boolValue: boolean, trueClassNames: string, falseClassNames?: string): void;
        removeClassName(classNames: string): void;
        renderClassName(): string;
        getRenderProps(): any;
    }
}
declare namespace Buhta {
    interface XButtonProps extends XComponentProps, XVisibleProps, XOnClickProps {
    }
    interface XButtonState {
    }
    class XButton<P extends XButtonProps, S extends XButtonState> extends XComponent<P, S> {
        constructor(props: P, context: any);
        protected didMount(): void;
        protected willMount(): void;
        protected willUnmount(): void;
        protected willReceiveProps(nextProps: P): void;
        protected didUpdate(prevProps: P, prevState: S, prevContext: any): void;
        render(): JSX.Element;
    }
}
declare namespace Buhta {
    interface XTestTreeGridProps extends XComponentProps, XVisibleProps, XOnClickProps {
    }
    interface XTestTreeGridState {
    }
    class XTestTreeGrid<P extends XTestTreeGridProps, S extends XTestTreeGridState> extends XComponent<P, S> {
        constructor(props: P, context: any);
        protected didMount(): void;
        protected willMount(): void;
        protected willUnmount(): void;
        protected willReceiveProps(nextProps: P): void;
        protected didUpdate(prevProps: P, prevState: S, prevContext: any): void;
        bbb(): JSX.Element[];
        render(): JSX.Element;
    }
}
declare namespace Buhta {
    interface XTreeGridProps extends XComponentProps, XVisibleProps, XOnClickProps {
    }
    interface XTreeGridState {
    }
    class XTreeGrid<P extends XTreeGridProps, S extends XTreeGridState> extends XComponent<P, S> {
        constructor(props: P, context: any);
        protected didMount(): void;
        protected willMount(): void;
        protected willUnmount(): void;
        protected willReceiveProps(nextProps: P): void;
        protected didUpdate(prevProps: P, prevState: S, prevContext: any): void;
        render(): JSX.Element;
    }
}
declare namespace Buhta {
    interface XTreeGridColumnProps extends XComponentProps {
        caption?: string;
    }
    interface XTreeGridColumnState extends XComponentState {
    }
    class XTreeGridColumn extends XComponent<XTreeGridColumnProps, XTreeGridColumnState> {
        constructor(props: XTreeGridColumnProps, context: any);
        render(): JSX.Element;
    }
}
declare namespace Buhta {
    interface XTreeGridColumnGroupProps extends XComponentProps {
        caption?: string;
    }
    interface XTreeGridColumnGroupState extends XComponentState {
    }
    class XTreeGridGroupColumn extends XComponent<XTreeGridColumnGroupProps, XTreeGridColumnGroupState> {
        constructor(props: XTreeGridColumnGroupProps, context: any);
        render(): JSX.Element;
    }
}
