/// <reference path="references.ts" />
/// <reference path="../../typings/index.d.ts" />

namespace Buhta {

    import render = React.__DOM.render;

    export interface XVisibleProps {
        visible?: boolean;
    }

    export interface XOnClickProps {
        onClick?: React.ReactEventHandler;
    }

    export interface XComponentProps extends XVisibleProps {
        style?: React.CSSProperties;
        className?: string;
    }


    export interface XComponentState {
        // //clickCount: number;
        // style: React.CSSProperties;
    }


    export class XComponent<P extends XComponentProps, S extends XComponentState> extends React.Component<P, S> {

        constructor(props: P, context) {
            super(props, context);
            this.props = props;

            (this as any)["state"] = {};
        }

        renderClasses: string[] = [];
        renderProps: any = [];

        protected didMount() {
        }

        private componentDidMount = () => {
            this.didMount();
        };

        protected willMount() {
        }

        private componentWillMount = () => {
            this.willMount();
        };

        protected willUnmount() {
        }

        private componentWillReceiveProps = (nextProps: P) => {
            this.willReceiveProps(nextProps);
        };

        protected willReceiveProps(nextProps: P) {
        }


        private componentDidUpdate = (prevProps: P, prevState: S, prevContext: any) => {
            this.didUpdate(prevProps, prevState, prevContext);
        };

        protected didUpdate(prevProps: P, prevState: S, prevContext: any) {
        }

        private componentWillUnmount = () => {
            this.willUnmount();
        };

        addClassName(classNames: string) {
            if (classNames)
                classNames.split(" ").forEach((name) => {
                    if (this.renderClasses.indexOf(name) === -1)
                        this.renderClasses.push(name);
                });
        }

        toggleClassName(boolValue: boolean, trueClassNames: string, falseClassNames?: string) {
            if (boolValue) {
                this.addClassName(trueClassNames);
                if (falseClassNames)
                    this.removeClassName(falseClassNames);
            }
            else {
                this.removeClassName(trueClassNames);
                if (falseClassNames)
                    this.addClassName(falseClassNames);
            }
        }

        removeClassName(classNames: string) {
            if (classNames)
                classNames.split(" ").forEach((name) => {
                    if (this.renderClasses.indexOf(name) !== -1)
                        this.renderClasses.splice(this.renderClasses.indexOf(name), 1);
                });
        }

        renderClassName() {
            this.addClassName(this.props.className);
            return this.renderClasses.join(" ");
        }

        getRenderProps() {
            this.renderProps = {};
            this.renderProps.className = this.renderClassName();
            let p: any = this.props;
            if (p.onClick)
                this.renderProps.onClick = p.onClick;
            return this.renderProps;
        }

        getChildren(childTypeName: string): JSX.Element[] {
            let ret:  JSX.Element[] = [];
            React.Children.toArray(this.props.children).forEach((child: any) => {
                if (Util.getReactElementClassName(child) === childTypeName)
                    ret.push(child);
            });
            return ret;
        }

        getChildrenOfProps(props: any, childTypeName: string):  JSX.Element[] {
            let ret:  JSX.Element[] = [];
            React.Children.toArray(props.children).forEach((child: any) => {
                if (Util.getReactElementClassName(child) === childTypeName)
                    ret.push(child);
            });
            return ret;
        }

        //render() {
        //    return (new)
        //    //    <button onClick={this.handleClick.bind(this) }>
        //    //        Component from {this.props.compiler} and {this.props.framework}!clickCount={this.state.clickCount}
        //    //    </button>
        //    //);
        //}
    }

}
//export var QQQ: String = "qqq-str";

//alert('жопа1-123-==');
