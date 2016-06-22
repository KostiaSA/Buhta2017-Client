/// <reference path="../references.ts" />
/// <reference path="../../../typings/index.d.ts" />
/// <reference path="../xcomponent.tsx" />

namespace Buhta {

    // export interface XVisibleProps {
    //     visible?: boolean;
    // }

    //  import XTreeGridColumnProps = Buhta.XTreeGridColumnProps;
    export interface XTreeGridProps extends XComponentProps, XVisibleProps, XOnClickProps {
        // style?: React.CSSProperties;
        // className?: string;
        dataSource?: any;
        rowHeight?: number;
    }


    export interface XTreeGridState {
    }


    class InternalColumn {
        props: XTreeGridColumnProps;

    }

    class InternalRow {
        element: Element;
        sourceObject: any;
        sourceIndex: number;
        cellElements: Element[] = [];
    }

    //export class XTreeGrid<P extends XTreeGridProps, S extends XTreeGridState> extends XComponent<P, S> {
    export class XTreeGrid extends XComponent<XTreeGridProps, XTreeGridState> {

        constructor(props: XTreeGridProps, context) {
            super(props, context);
            //this.state.columns=[];
        }

        private columns: InternalColumn[];
        private pageLength: number;
        private rows: InternalRow[];
        private focusedRowIndex: number;
        private focusedCellIndex: number;


        private createColumns() {
            this.columns = [];

            console.log("1");
            let columnsTag = this.getChildren("XTreeGridColumns");

            columnsTag.forEach((tag: JSX.Element) => {
                let columnTagList = this.getChildrenOfProps(tag.props, "XTreeGridColumn");

                columnTagList.forEach((propCol: JSX.Element) => {

                    let col = new InternalColumn();
                    col.props = propCol.props;
                    this.columns.push(col);
                });
            });


        }

        private initFocused() {
            this.focusedRowIndex = 0;
            this.focusedCellIndex = 0;
        }

        private createData() {


            let dataSource = window["xxx"];
            //let dataSource = this.props.dataSource;

            if (!dataSource)
                return;

            this.rows = [];
            dataSource.forEach((obj, index) => {
                let row = new InternalRow();
                row.sourceIndex = index;
                row.sourceObject = obj;
                this.rows.push(row);
            });

            this.initFocused();
        }

        private filterData() {

//            if (this.props.dataSource) {
//                this.state.data = this.props.dataSource.map((row) => row);
//            }
            this.rows = window["xxx"].filter((row) => row["Название"].indexOf("Phil") > -1);

        }

        protected didMount() {
            this.handleChangeFocused();
        }


        protected willMount() {
            super.willMount();
            this.createColumns();
            this.createData();
            this.pageLength = 500;
        }


        protected willUnmount() {
        }


        protected willReceiveProps(nextProps: XTreeGridProps) {
        }


        protected didUpdate(prevProps: XTreeGridProps, prevState: XTreeGridState, prevContext: any) {
            this.handleChangeFocused();
        }


        private renderRows(): JSX.Element[] {
            console.log("renderRows()");
            //let {pageStartIndex, pageLength, data} = this.state;
            let ret: JSX.Element[] = [];
            if (!this.rows)
                return ret;

            for (let i = 0; i < this.pageLength && i < this.rows.length; i++) {
                ret.push(this.renderRow(i));
            }
            return ret;
        }

        private renderRow(rowIndex: number): JSX.Element {
            return (
                <tr
                    key={rowIndex}
                    ref={ (e) => this.rows[rowIndex].element = e}
                >
                    { this.renderCells(rowIndex)}
                </tr>
            );
        }

        private renderCells(rowIndex: number): JSX.Element[] {
            let ret: JSX.Element[] = [];
            this.columns.forEach((col, colIndex) => {
                ret.push(this.renderCell(rowIndex, col, colIndex));
            });
            return ret;
        }

        private renderCell(rowIndex: number, col: InternalColumn, colIndex: number): JSX.Element {

            let str = this.rows[rowIndex].sourceObject[col.props.fieldName].toString();
            // return <td key={colIndex}>
            //     <div style={{height:16, overflow:"hidden"}}>{str}</div>
            // </td>;
            return (
                <td
                    key={colIndex}
                    ref={ (e) => this.rows[rowIndex].cellElements[colIndex] = e}
                    onClick={ (e) => { this.setFocusedCell(rowIndex,colIndex);} }
                >
                    <div>{str}</div>
                </td>
            );
        }

        private setFocusedCell(rowIndex: number, cellIndex: number) {

            this.focusedRowIndex = rowIndex;
            this.focusedCellIndex = cellIndex;
            this.handleChangeFocused();
        }


        private handleTableWheel(e: WheelEvent) {
            // if (e.deltaY > 0)
            //     this.incPageStartIndex(3);
            // else if (e.deltaY < 0)
            //     this.decPageStartIndex(3);
            // console.log(e.deltaY);
            // this.forceUpdate();
        }

        private handleScroll(e: UIEvent) {
            $(this.headerElement).css({top: this.bodyWrapperElement.scrollTop});

            let pos = this.bodyWrapperElement.scrollTop + this.bodyWrapperElement.clientHeight - $(this.footerElement).outerHeight() - 0;
            $(this.footerElement).css({top: pos});

            $(this.headerFakeRow).css({height: $(this.headerElement).outerHeight()});
            $(this.footerFakeRow).css({height: $(this.footerElement).outerHeight()});

            //this.forceUpdate();
//             //console.log(e);
//             //window["eee"] = e;
//             console.log(this.bodyWrapperElement.scrollTop);
//             this.bodyTopFakeHeigth = this.bodyWrapperElement.scrollTop;
//             console.log("-----------");
//             console.log(this.bodyWrapperElement.scrollHeight);
//             console.log(this.bodyWrapperElement.clientHeight);
//             console.log(this.bodyWrapperElement.scrollTop);
// //            this.bodyBottomFakeHeight = this.bodyWrapperElement.scrollHeight - this.bodyWrapperElement.clientHeight - this.bodyWrapperElement.scrollTop;
//             this.bodyBottomFakeHeight = 1500 - this.bodyWrapperElement.clientHeight - this.bodyWrapperElement.scrollTop;
//             console.log("bottom- " + this.bodyBottomFakeHeight);
//
//             this.state.pageStartIndex = 500 * this.bodyWrapperElement.scrollTop / 1500;
//
//             this.forceUpdate();
        }


        private handleChangeFocused() {
            if (!this.rows)
                return;

            this.rows.forEach((row) => {
                if (row.element)
                    $(row.element).removeClass("tree-grid-focused-row");

                row.cellElements.forEach((cell) => {
                    if (cell)
                        $(cell).removeClass("tree-grid-focused-cell");

                });
            });

            let focusedRow = this.rows[this.focusedRowIndex];
            if (focusedRow && focusedRow.element) {
                $(focusedRow.element).addClass("tree-grid-focused-row");

                let focusedCellElement = focusedRow.cellElements[this.focusedCellIndex];
                if (focusedCellElement) {
                    $(focusedCellElement).addClass("tree-grid-focused-cell");
                }
            }


        }


        private moveFocusedCellDown() {
            if (!this.rows)
                return;

            if (this.focusedRowIndex < this.rows.length - 1) {
                this.focusedRowIndex++;
                this.handleChangeFocused();
            }
        }

        private moveFocusedCellUp() {
            if (!this.rows)
                return;

            if (this.focusedRowIndex >= 0) {
                this.focusedRowIndex--;
                this.handleChangeFocused();
            }
        }


        handleBodyKeyDown(e: React.KeyboardEvent) {
            if (e.key === Keycode.Down) {
                this.moveFocusedCellDown();
                e.preventDefault();
            }
            else
            if (e.key === Keycode.Down) {
                this.moveFocusedCellUp();
                e.preventDefault();
            }
        }


        //bodyTopFakeHeigth: number = 1;
        bodyWrapperElement: any;
        headerFakeRow: any;
        footerFakeRow: any;
        headerElement: any;
        footerElement: any;

        render() {
            //this.addClassName("button");
            console.log("2");

            return (
                <div className="tree-grid">
                    <div className="tree-grid-header-wrapper">
                        <button onClick={ () => { this.createData(); this.forceUpdate(); console.log("forceUpdate"); }}>
                            refresh
                        </button>
                        <button onClick={ () => { this.filterData(); this.forceUpdate(); console.log("forceUpdate"); }}>
                            filter
                        </button>
                        заголовок и т.д.
                    </div>
                    <div className="tree-grid-body-wrapper"
                         onWheel={ this.handleTableWheel.bind(this)}
                         onScroll={ this.handleScroll.bind(this)}
                         ref={ (e) => this.bodyWrapperElement = e}


                    >
                        <div>
                            <table
                                className="tree-grid-body"
                                tabIndex={0}
                                onKeyDown={ (e) => {  this.handleBodyKeyDown(e); } }
                            >
                                <colgroup>
                                    <col width="60px"/>
                                    <col width="240px"/>
                                    <col width="140px"/>
                                </colgroup>
                                <tbody>
                                <tr>
                                    <td ref={ (e) => this.headerFakeRow = e}></td>
                                </tr>
                                {this.renderRows()}
                                <tr>
                                    <td ref={ (e) => this.footerFakeRow = e}></td>
                                </tr>
                                </tbody>
                            </table>
                            <div ref={ (e) => this.headerElement = e}
                                 style={{ position:"absolute", border:"0px solid red" }}>
                                <table className="tree-grid-header" style={{tableLayout: "fixed"}}>
                                    <colgroup>
                                        <col width="60px"/>
                                        <col width="240px"/>
                                        <col width="140px"/>
                                    </colgroup>
                                    <tbody>
                                    <tr>
                                        <td>Номер</td>
                                        <td>Название <br/> и еще что-то</td>
                                        <td>Город</td>
                                    </tr>
                                    </tbody>
                                </table>

                            </div>
                            <div ref={ (e) => this.footerElement = e}
                                 style={{ position:"absolute", border:"0px solid blue"}}>
                                <table className="tree-grid-footer" style={{tableLayout: "fixed"}}>
                                    <colgroup>
                                        <col width="60px"/>
                                        <col width="240px"/>
                                        <col width="140px"/>
                                    </colgroup>
                                    <tbody>
                                    <tr>
                                        <td>10 шт</td>
                                        <td>--</td>
                                        <td>сумма: 100 руб</td>
                                    </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                    <div className="tree-grid-footer-wrapper">
                        футер и тд
                    </div >
                </div >
            )
                ;
        }
    }

}
//export var QQQ: String = "qqq-str";

//alert('жопа1-123-==');
