/// <reference path="BaseComponent.tsx" />

namespace Buhta {

    export interface ButtonProps extends BaseComponentProps {
        onClick?: React.ReactEventHandler;
        disabled?: boolean;
    }

    export interface ButtonState extends BaseComponentState {
        //disabled?: boolean | booleanFunction;
    }


    export class Button extends BaseComponent<ButtonProps, ButtonState> {

        constructor(props: ButtonProps, context) {
            super(props, context);

            //this.state.disabled = false;

        }

        render(): JSX.Element {

            this.addClassName("btn");
            this.toggleClassName(this.props.disabled, "disabled");

            return (
                <button
                    type="button"
                    className={this.renderClassName() }
                    onClick={this.props.onClick ? this.props.onClick.bind(this) : null }
                >
                    {this.props.children}
                </button>
            );
            //Button from {this.props.compiler} and {this.props.framework}!clickCount={this.state.clickCount}
        }
    }


}
//export var QQQ: String = "qqq-str";

//alert('жопа1-123-==');
