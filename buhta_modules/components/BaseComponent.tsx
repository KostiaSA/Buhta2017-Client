/// <reference path="references.ts" />
/// <reference path="../../typings/index.d.ts" />

namespace Buhta {

    export interface BaseComponentProps {
        visible?: boolean;
//        enabled?: boolean;
        style?: React.CSSProperties;
        className?: string;
    }


    export interface BaseComponentState {
        //clickCount: number;
        classes: Array<string>;
    }

//    export class BaseComponent<P extends BaseComponentProps, S extends BaseComponentState> extends React.Component<BaseComponentProps, BaseComponentState> {
    export class BaseComponent<P extends BaseComponentProps, S extends BaseComponentState> extends React.Component<P, S> {

        constructor(props: P, context) {
            super(props, context);
            this.props = props;

            (this as any)["state"] = {classes: []};
        }

        protected didMount() {
        }

        protected componentDidMount = () => {
            this.didMount();
        };

        protected willUnmount() {
        }

        protected componentWillUnmount = () => {
            this.willUnmount();
        };

        protected refersh() {
            this.setState(this.state);
        }

        addClassName(classNames: string) {
            if (classNames)
                classNames.split(" ").forEach((name) => {
                    if (this.state.classes.indexOf(name) === -1)
                        this.state.classes.push(name);
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
                    if (this.state.classes.indexOf(name) !== -1)
                        this.state.classes.splice(this.state.classes.indexOf(name), 1);
                });
        }

        renderClassName() {
            this.addClassName(this.props.className);
            return this.state.classes.join(" ");
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
