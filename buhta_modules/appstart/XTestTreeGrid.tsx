/// <reference path="references.ts" />
/// <reference path="../../typings/index.d.ts" />
/// <reference path="xcomponent.tsx" />

namespace Buhta {

    // export interface XVisibleProps {
    //     visible?: boolean;
    // }

    export interface XTestTreeGridProps extends XComponentProps, XVisibleProps, XOnClickProps {
        // style?: React.CSSProperties;
        // className?: string;
    }


    export interface XTestTreeGridState {
        // //clickCount: number;
        // style: React.CSSProperties;
    }


    export class XTestTreeGrid<P extends XTestTreeGridProps, S extends XTestTreeGridState> extends XComponent<P, S> {

        constructor(props: P, context) {
            super(props, context);
        }

        protected didMount() {
        }


        protected willMount() {
        }


        protected willUnmount() {
        }


        protected willReceiveProps(nextProps: P) {
        }


        protected didUpdate(prevProps: P, prevState: S, prevContext: any) {
        }


        bbb(): JSX.Element[] {

            let ret: JSX.Element[] = [];

            for (let row = 0; row < 5; row++) {

                let colChildren: JSX.Element[] = [];

                for (let col = 0; col < 3; col++) {

                    colChildren.push(<td>col{col} row{row}</td>);
                }

                ret.push(<tr> { colChildren} </tr>);

            }
            return ret;
        }

        render() {
            this.addClassName("button");

            return (
                <div className="table-wrapper">
                    <table>
                        <thead>
                        <col width="100px"/>
                        <tr>
                            <th  width="250px">
                                col1
                            </th>
                            <th>
                                col2
                            </th>
                            <th>
                                col3
                            </th>
                        </tr>
                        </thead>
                        <tfoot>
                        <tr height="50px">
                            <td>
                                footer1
                            </td>
                            <td>
                                footer2
                            </td>
                            <td>
                                footer3
                            </td>
                        </tr>
                        </tfoot>
                        <tbody>
                        <tr>
                            <td>
                                first-row1
                            </td>
                            <td>
                                first-row2
                            </td>
                            <td>
                                first-row31
                            </td>
                        </tr>
                        {this.bbb()}
                        </tbody>
                    </table>
                </div>
            );
        }
    }

}
//export var QQQ: String = "qqq-str";

//alert('жопа1-123-==');
