namespace Buhta {

    export class GridTreeNodeData<TRowData> implements Fancytree.NodeData {
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
        children: GridTreeNodeData<TRowData>[] = [];
        tooltip: string;
        extraClasses: string;
        data: any = {};

        id: number | string;
        parent: number | string;

        get rowData(): TRowData {
            return this.data.rowData as TRowData;
        }

        set rowData(value: TRowData) {
            this.data.rowData = value;
        }
    }

    export type TreeGreedDataSource<TRowData> = GridTreeNodeData<TRowData>[];

    export interface TreeGridProps<TRowData> extends BaseComponentProps {
        dataSource: TreeGreedDataSource<TRowData>;
        isNeedConvertFlatDataToTree?: boolean;
    }

    export interface TreeGridState<TRowData> extends BaseComponentState {
        columns: Array<TreeGridColumnProps>;
    }


    export class TreeGrid<TRowData> extends BaseComponent<TreeGridProps<TRowData>, TreeGridState<TRowData>> {

        constructor(props: TreeGridProps<TRowData>, context) {
            super(props, context);

            //this.state.disabled = false;

        }

        fancyTree: Fancytree.Fancytree;

        protected componentDidMount = () => {
            super.didMount();

            let config: Fancytree.FancytreeOptions = {
                source: this.props.dataSource
            };

            if (this.props.isNeedConvertFlatDataToTree)
                config.source = this.convertFlatDataToTree(config.source);

            this.fancyTree = $(this.tableElement).fancytree(config);

        };

        convertFlatDataToTree(childList) {
            let parent,
                nodeMap = {};
            $.each(childList, function (i, c) {
                nodeMap[c.id] = c;
            });
            childList = $.map(childList, function (c) {
                c.key = c.id;
                delete c.id;
                if (c.parent) {
                    parent = nodeMap[c.parent];
                    if (parent.children) {
                        parent.children.push(c);
                    } else {
                        parent.children = [c];
                    }
                    return null;
                }
                return c;
            });
            $.each(childList, function (i, c) {
                if (c.children && c.children.length > 1) {
                    c.children.sort(function (a, b) {
                        return ((a.position < b.position) ? -1 : ((a.position > b.position) ? 1 : 0));
                    });
                }
            });
            return childList;
        }


        createStateColumnList() {
            if (!this.state.columns) {
                this.state.columns = React.Children.map(this.props.children, ((child, index) => {
                    return (child as any).props as TreeGridColumnProps;
                }));
            }

        }

        tableElement: Element;

        render(): JSX.Element {

            this.createStateColumnList();

            //this.addClassName("btn");
            // this.toggleClassName(this.props.disabled, "disabled");

            return (
                <table
                    className={this.renderClassName() }
                    ref={(e) => this.tableElement = e}
                >
                    <thead>
                    <tr>
                        {this.state.columns.map((col, index) => {
                            return (<th key={index}> {col.caption} </th>);
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        {this.state.columns.map((col, index) => {
                            return <td key={index}></td>;
                        })}
                    </tr>
                    </tbody>
                </table>
            );
            //TreeGrid from {this.props.compiler} and {this.props.framework}!clickCount={this.state.clickCount}
        }
    }


}
