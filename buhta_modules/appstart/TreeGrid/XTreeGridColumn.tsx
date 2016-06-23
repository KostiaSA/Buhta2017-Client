namespace Buhta {


    export interface XTreeGridColumnProps extends XComponentProps {
        caption?: string;
        width?:number;
        fieldName?: string;
        showHierarchyTree?: boolean;
        showHierarchyPadding?: boolean;
    }

    export interface XTreeGridColumnState extends XComponentState {
        //disabled?: boolean | booleanFunction;
    }


    export class XTreeGridColumn extends XComponent<XTreeGridColumnProps, XTreeGridColumnState> {

        constructor(props: XTreeGridColumnProps, context) {
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
