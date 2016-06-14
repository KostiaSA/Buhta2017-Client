/// <reference path="BaseComponent.tsx" />

namespace Buhta {

    export enum InputType {Text, Number, Date}


    export interface InputProps extends BaseComponentProps {
        type?: InputType;
        bindObj?: Object;
        bindProp?: string;
        maxWidth?: number;
        //framework: string;
        onClick?: React.ReactEventHandler;
    }

    export interface InputState extends BaseComponentState {
        text?: string;
    }

    export class Input extends BaseComponent<InputProps, InputState> {

        constructor(props: InputProps, context) {
            super(props, context);

            this.state.text = "";
        }


        render(): JSX.Element {
            switch (this.props.type) {
                case InputType.Text:
                    return this.renderText();
                default:
                    throw  "Input.render():=> unknown InputType '" + this.props.type + "'";
            }
        }


        renderText(): JSX.Element {

            let getText = (): string => {
                if (this.props.bindObj && this.props.bindProp) {
                    if (this.props.bindObj[this.props.bindProp])
                        return this.props.bindObj[this.props.bindProp].toString();
                    else
                        return "";
                }
                else
                    return "<unbinded>";
            };

            let onChange = (event: React.SyntheticEvent) => {
                if (this.props.bindObj && this.props.bindProp)
                    this.props.bindObj[this.props.bindProp] = (event.target as any).value;
                this.setState(this.state);

            };

            this.addClassName("form-control");

            return (
                <input
                    type="text"
                    className={this.renderClassName()}
                    style={this.props.style}
                    value={getText.bind(this)()}
                    onChange={onChange.bind(this)}>
                </input>
            );
            //Button from {this.props.compiler} and {this.props.framework}!clickCount={this.state.clickCount}
        }
    }


}
//export var QQQ: String = "qqq-str";

//alert('жопа1-123-==');
