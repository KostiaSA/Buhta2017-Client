
namespace Buhta {


    export interface XTreeGridColumnsProps extends XComponentProps {
        //caption?: string;
    }

    export interface XTreeGridColumnsState extends XComponentState {
        //disabled?: boolean | booleanFunction;
    }


    export class XTreeGridColumns extends XComponent<XTreeGridColumnsProps, XTreeGridColumnsState> {

        constructor(props: XTreeGridColumnsProps, context) {
            super(props, context);

            //this.state.disabled = false;

        }

        // render(): JSX.Element {
        //
        //     //this.addClassName("btn");
        //     //this.toggleClassName(this.props.disabled, "disabled");
        //
        //     return (null );
        //     //TreeGrid from {this.props.compiler} and {this.props.framework}!clickCount={this.state.clickCount}
        // }
    }

}
