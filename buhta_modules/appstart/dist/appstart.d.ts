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
