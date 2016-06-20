/// <reference path="references.ts" />
/// <reference path="../../typings/index.d.ts" />
/// <reference path="xcomponent.tsx" />

namespace Buhta {

    // export interface XVisibleProps {
    //     visible?: boolean;
    // }

    export interface XButtonProps extends XComponentProps, XVisibleProps, XOnClickProps {
        // style?: React.CSSProperties;
        // className?: string;
    }


    export interface XButtonState {
        // //clickCount: number;
        // style: React.CSSProperties;
    }


    export class XButton<P extends XButtonProps, S extends XButtonState> extends XComponent<P, S> {

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
                <a {...this.getRenderProps()}>
                    {this.props.children}
                </a>
            );
        }
    }

}
//export var QQQ: String = "qqq-str";

//alert('жопа1-123-==');
