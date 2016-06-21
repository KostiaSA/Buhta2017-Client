﻿/// <reference path="../references.ts" />
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
        dataSource?: any[];
        rowHeight?: number;
    }


    export interface XTreeGridState {
        columns?: Column[];
        // //clickCount: number;
        // style: React.CSSProperties;

        pageStartIndex?: number;
        pageLength?: number;
        data?: any[];
    }


    export class Column {
        props: XTreeGridColumnProps;

    }


    //export class XTreeGrid<P extends XTreeGridProps, S extends XTreeGridState> extends XComponent<P, S> {
    export class XTreeGrid extends XComponent<XTreeGridProps, XTreeGridState> {

        constructor(props: XTreeGridProps, context) {
            super(props, context);
            //this.state.columns=[];
        }

        private createColumns() {
            this.state.columns = [];

            console.log("1");
            let columnsTag = this.getChildren("XTreeGridColumns");

            columnsTag.forEach((tag: JSX.Element) => {
                let columnTagList = this.getChildrenOfProps(tag.props, "XTreeGridColumn");

                columnTagList.forEach((propCol: JSX.Element) => {

                    let col = new Column();
                    col.props = propCol.props;
                    this.state.columns.push(col);
                });
            });


        }

        private createData() {

//            if (this.props.dataSource) {
//                this.state.data = this.props.dataSource.map((row) => row);
//            }
            this.state.data = window["xxx"];

        }

        private filterData() {

//            if (this.props.dataSource) {
//                this.state.data = this.props.dataSource.map((row) => row);
//            }
            this.state.data = window["xxx"].filter((row) => row["Название"].indexOf("Phil") > -1);

        }

        protected didMount() {
        }


        protected willMount() {
            super.willMount();
            this.createColumns();
            this.createData();
            this.state.pageStartIndex = 0;
            this.state.pageLength = 500;
        }


        protected willUnmount() {
        }


        protected willReceiveProps(nextProps: XTreeGridProps) {
        }


        protected didUpdate(prevProps: XTreeGridProps, prevState: XTreeGridState, prevContext: any) {
        }


        private renderRows(): JSX.Element[] {
            console.log("renderRows()");
            let {pageStartIndex, pageLength, data} = this.state;
            let ret: JSX.Element[] = [];
            if (!data)
                return ret;

            for (let i = pageStartIndex; i < pageStartIndex + pageLength && i < data.length; i++) {
                ret.push(this.renderRow(i));
            }
            return ret;
        }

        private renderRow(rowIndex: number): JSX.Element {
            return <tr key={rowIndex}>{ this.renderCells(rowIndex)} </tr>;
        }

        private renderCells(rowIndex: number): JSX.Element[] {
            let ret: JSX.Element[] = [];
            this.state.columns.forEach((col, colIndex) => {
                ret.push(this.renderCell(rowIndex, col, colIndex));
            });
            return ret;
        }

        private renderCell(rowIndex: number, col: Column, colIndex: number): JSX.Element {

            let str = this.state.data[rowIndex][col.props.fieldName].toString();
            // return <td key={colIndex}>
            //     <div style={{height:16, overflow:"hidden"}}>{str}</div>
            // </td>;
            return <td key={colIndex}>
                <div>{str}</div>
            </td>;
        }


        private incPageStartIndex(rowCount: number) {
            this.state.pageStartIndex += rowCount;
        }

        private decPageStartIndex(rowCount: number) {
            this.state.pageStartIndex -= rowCount;
            if (this.state.pageStartIndex < 0)
                this.state.pageStartIndex = 0;
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
                            <table className="tree-grid-body">
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
                                 style={{ position:"absolute", border:"1px solid red" }}>
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
                                 style={{ position:"absolute", border:"1px solid blue"}}>
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
