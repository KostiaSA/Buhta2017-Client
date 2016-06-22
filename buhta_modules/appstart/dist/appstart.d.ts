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
declare namespace Buhta {
}
declare namespace Buhta {
    interface DxComponentProps {
        visible?: boolean;
        style?: React.CSSProperties;
        className?: string;
    }
    interface DxComponentState {
        classes: Array<string>;
        style: React.CSSProperties;
        nativeElement: Element;
    }
    class DxComponent<P extends DxComponentProps, S extends DxComponentState> extends React.Component<P, S> {
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
    interface DxButtonProps extends DxComponentProps {
        text?: string;
        onClick?: () => void;
    }
    interface DxButtonState extends DxComponentState {
    }
    class DxButton extends DxComponent<DxButtonProps, DxButtonState> {
        constructor(props: DxButtonProps, context: any);
        createDxOptions(old: DxButtonProps, next: DxButtonProps): DevExpress.ui.dxButtonOptions;
        handleOnClick(): void;
        protected didMount(): void;
        render(): JSX.Element;
    }
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
        getChildren(childTypeName: string): JSX.Element[];
        getChildrenOfProps(props: any, childTypeName: string): JSX.Element[];
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
        dataSource?: any;
        rowHeight?: number;
    }
    interface XTreeGridState {
    }
    class XTreeGrid extends XComponent<XTreeGridProps, XTreeGridState> {
        constructor(props: XTreeGridProps, context: any);
        private columns;
        private pageLength;
        private rows;
        private focusedRowIndex;
        private focusedCellIndex;
        private createColumns();
        private initFocused();
        private createData();
        private filterData();
        protected didMount(): void;
        protected willMount(): void;
        protected willUnmount(): void;
        protected willReceiveProps(nextProps: XTreeGridProps): void;
        protected didUpdate(prevProps: XTreeGridProps, prevState: XTreeGridState, prevContext: any): void;
        private renderRows();
        private renderRow(rowIndex);
        private renderCells(rowIndex);
        private renderCell(rowIndex, col, colIndex);
        private setFocusedCell(rowIndex, cellIndex);
        private handleTableWheel(e);
        private handleScroll(e);
        private handleChangeFocused();
        private getFocusedCellElement();
        private getFocusedRowElement();
        private moveFocusedCellDown();
        private moveFocusedCellLeft();
        private moveFocusedCellRight();
        private moveFocusedCellUp();
        handleBodyKeyDown(e: React.KeyboardEvent): void;
        bodyWrapperElement: any;
        headerFakeRow: any;
        footerFakeRow: any;
        headerElement: any;
        footerElement: any;
        render(): JSX.Element;
    }
}
declare namespace Buhta {
    interface XTreeGridColumnProps extends XComponentProps {
        caption?: string;
        fieldName?: string;
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
declare namespace Buhta {
    interface XTreeGridColumnsProps extends XComponentProps {
    }
    interface XTreeGridColumnsState extends XComponentState {
    }
    class XTreeGridColumns extends XComponent<XTreeGridColumnsProps, XTreeGridColumnsState> {
        constructor(props: XTreeGridColumnsProps, context: any);
    }
}
