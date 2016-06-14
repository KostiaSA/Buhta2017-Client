/// <reference path="BaseComponent.tsx" />

namespace Buhta {

    export interface LayoutPanelProps extends BaseComponentProps {
        renderToBody?: boolean;
        //disabled?: boolean;
    }

    export interface LayoutPanelState extends BaseComponentState {
        //disabled?: boolean | booleanFunction;
    }


    export class LayoutPanel extends BaseComponent<LayoutPanelProps, LayoutPanelState> {

        constructor(props: LayoutPanelProps, context) {
            super(props, context);

            //this.state.disabled = false;

        }

        rootElement: any;

        protected componentDidMount = () => {
            super.didMount();

            $("body").first().replaceWith($(this.rootElement));

//            let myLayout = ($(this.rootElement) as any).layout({applyDefaultStyles: true});
            let myLayout = ($(this.rootElement) as any).layout({});

            //  $("div").first().replaceWith('<body>' + $(this.rootElement).html() +'</body>')
            // let myLayout = ($(this.rootElement) as any).layout({
            //
            //     //	reference only - these options are NOT required because 'true' is the default
            //     closable: true	// pane can open & close
            //     , resizable: true	// when open, pane can be resized
            //     , slidable: true	// when closed, pane can 'slide' open over other panes - closes on mouse-out
            //     , livePaneResizing: true
            //
            //     //	some resizing/toggling settings
            //     , north__slidable: false	// OVERRIDE the pane-default of 'slidable=true'
            //     , north__togglerLength_closed: '100%'	// toggle-button is full-width of resizer-bar
            //     , north__spacing_closed: 20		// big resizer-bar when open (zero height)
            //     , south__resizable: false	// OVERRIDE the pane-default of 'resizable=true'
            //     , south__spacing_open: 0		// no resizer-bar when open (zero height)
            //     , south__spacing_closed: 20		// big resizer-bar when open (zero height)
            //
            //     //	some pane-size settings
            //     , west__minSize: 100
            //     , east__size: 300
            //     , east__minSize: 200
            //     , east__maxSize: .5 // 50% of layout width
            //     , center__minWidth: 100
            //
            //     //	some pane animation settings
            //     , west__animatePaneSizing: false
            //     , west__fxSpeed_size: "fast"	// 'fast' animation when resizing west-pane
            //     , west__fxSpeed_open: 1000	// 1-second animation when opening west-pane
            //     , west__fxSettings_open: {easing: "easeOutBounce"} // 'bounce' effect when opening
            //     , west__fxName_close: "none"	// NO animation when closing west-pane
            //
            //     //	enable showOverflow on west-pane so CSS popups will overlap north pane
            //     , west__showOverflowOnHover: true
            //
            //     //	enable state management
            //     , stateManagement__enabled: true // automatic cookie load & save enabled by default
            //
            //     , showDebugMessages: true // log and/or display messages from debugging & testing code
            // });

        }


        render(): JSX.Element {

            //this.addClassName("xeeexx");
            //this.toggleClassName(this.props.disabled, "disabled");

            if (this.props.renderToBody)

                return (
                    <body
                        ref={(e) => this.rootElement = e}
                        className={this.renderClassName() }
                    >
                    {this.props.children}
                    </body>
                );
            else
                return (
                    <div
                        ref={(e) => this.rootElement = e}
                        className={this.renderClassName() }
                    >
                    {this.props.children}
                    </div>
                );
        }
    }

    export enum PaneRegion { Center, North, West, South, East }

    export interface LayoutPaneProps extends BaseComponentProps {
        region: "center" | "north" | "west" | "south" | "east";
        //disabled?: boolean;
    }

    export interface LayoutPaneState extends BaseComponentState {
        //disabled?: boolean | booleanFunction;
    }


    export class LayoutPane extends BaseComponent<LayoutPaneProps, LayoutPaneState> {

        constructor(props: LayoutPaneProps, context) {
            super(props, context);

            //this.state.disabled = false;

        }

        render(): JSX.Element {

            this.addClassName("ui-layout-" + this.props.region);
            //this.toggleClassName(this.props.disabled, "disabled");

            return (
                <div
                    className={this.renderClassName() }
                >
                    {this.props.children}
                </div>
            );
        }
    }
}
