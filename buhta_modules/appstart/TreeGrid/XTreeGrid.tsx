/// <reference path="../references.ts" />
/// <reference path="../../../typings/index.d.ts" />
/// <reference path="../xcomponent.tsx" />

namespace Buhta {

    // export interface XVisibleProps {
    //     visible?: boolean;
    // }

    export interface XTreeGridProps extends XComponentProps, XVisibleProps, XOnClickProps {
        // style?: React.CSSProperties;
        // className?: string;
    }


    export interface XTreeGridState {
        // //clickCount: number;
        // style: React.CSSProperties;
    }


    export class XTreeGrid<P extends XTreeGridProps, S extends XTreeGridState> extends XComponent<P, S> {

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


        render() {
            this.addClassName("button");

            return (
                <div className="tree-grid">
                    <div className="tree-grid-header-wrapper">
                        <table className="tree-grid-header">
                            <colgroup>
                                <col width="60px"/>
                                <col width="140px"/>
                                <col width="40px"/>
                            </colgroup>
                            <tr>
                                <td >Номер</td>
                                <td>Название</td>
                                <td>Город СПБ</td>
                                <td>fake</td>
                            </tr>
                        </table>
                    </div>
                    <div className="tree-grid-body-wrapper">
                        <table className="tree-grid-body">
                            <colgroup>
                                <col width="60px"/>
                                <col width="140px"/>
                                <col width="40px"/>
                            </colgroup>
                            <tr>
                                <td >22222222</td>
                                <td>3333333333</td>
                                <td>44444444</td>
                                <td>fake</td>
                            </tr>
                            <tr>
                                <td>22yrtyrt222222</td>
                                <td>33333yiywerwer33333</td>
                                <td>444yiyi44444</td>
                                <td>fake</td>
                            </tr>
                            <tr>
                                <td>22yrtweyrt222222</td>
                                <td>33333ywerweriy33333</td>
                                <td>444yiyi44444</td>
                                <td>fake</td>
                            </tr>
                            <tr>
                                <td>22yrtyrt222222</td>
                                <td>33333yjutyutyiy33333</td>
                                <td>44tuut4yiyi44444</td>
                                <td>fake</td>
                            </tr>
                            <tr>
                                <td>22345664yrtyrt222222</td>
                                <td>vvn33333yiy33333</td>
                                <td>4hggh44yiyi44444</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                    <div className="tree-grid-footer-wrapper">
                        <table className="tree-grid-footer">
                            <colgroup>
                                <col width="60px"/>
                                <col width="140px"/>
                                <col width="40px"/>
                            </colgroup>
                            <tr>
                                <td>12</td>
                                <td>Нет</td>
                                <td>12 руб</td>
                                <td>fake</td>
                            </tr>
                        </table>
                    </div>
                </div>
            );
        }
    }

}
//export var QQQ: String = "qqq-str";

//alert('жопа1-123-==');
