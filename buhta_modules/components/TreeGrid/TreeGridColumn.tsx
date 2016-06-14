
namespace Buhta {


    export interface TreeGridColumnProps extends BaseComponentProps {
        caption?: string;
    }

    export interface TreeGridColumnState extends BaseComponentState {
        //disabled?: boolean | booleanFunction;
    }


    export class TreeGridColumn extends BaseComponent<TreeGridColumnProps, TreeGridColumnState> {

        constructor(props: TreeGridColumnProps, context) {
            super(props, context);

            //this.state.disabled = false;

        }

        render(): JSX.Element {

            //this.addClassName("btn");
            //this.toggleClassName(this.props.disabled, "disabled");

            return (null );
            //TreeGrid from {this.props.compiler} and {this.props.framework}!clickCount={this.state.clickCount}
        }
    }

}
