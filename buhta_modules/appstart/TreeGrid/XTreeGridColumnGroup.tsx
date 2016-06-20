
namespace Buhta {


    export interface XTreeGridColumnGroupProps extends XComponentProps {
        caption?: string;
    }

    export interface XTreeGridColumnGroupState extends XComponentState {
        //disabled?: boolean | booleanFunction;
    }


    export class XTreeGridGroupColumn extends XComponent<XTreeGridColumnGroupProps, XTreeGridColumnGroupState> {

        constructor(props: XTreeGridColumnGroupProps, context) {
            super(props, context);

            //this.state.disabled = false;

        }

        render(): JSX.Element {

            //this.addClassName("btn");
            //this.toggleClassName(this.props.disabled, "disabled");

            return (null);
            //TreeGrid from {this.props.compiler} and {this.props.framework}!clickCount={this.state.clickCount}
        }
    }

}
