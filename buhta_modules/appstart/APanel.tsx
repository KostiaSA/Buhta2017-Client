namespace Buhta {

    export type CSS_position = "relative" | "absolute" | "fixed";
    export type CSS_display = "none" | "block" | "initial" ;

    export interface APanelProps extends AComponentProps {
        top?: number;
        left?: number;
        width?: number;
        height?: number;
        position?: CSS_position;
        //display?: CSS_position;
        isDraggable?: boolean;
    }

    export interface  DragState {
        mouseDownTop: number;
        mouseDownLeft: number;
        oldTop: number;
        oldLeft: number;
        mouseMoveHandler: any;
    }

    export interface APanelState extends AComponentState {
//        css: React.CSSProperties;
        onMouseDown?: React.MouseEventHandler;
        onMouseUp?: React.MouseEventHandler;
        dragState?: DragState;
        top?: number;
        left?: number;
        height?: number;
        display?: CSS_position;

    }

    export class APanel extends AComponent<APanelProps, APanelState> {

        constructor(props: APanelProps, context) {
            super(props, context);
//            this.state = {css: {}};
        }

        handleMouseDown(event) {
            this.state.dragState = {
                mouseDownLeft: event.pageX,
                mouseDownTop: event.pageY,
                oldTop: this.state.style.top,
                oldLeft: this.state.style.left,
                mouseMoveHandler: this.handleMouseMove.bind(this)
            };
            addEventListener("mousemove", this.state.dragState.mouseMoveHandler);
        };

        handleMouseUp(event) {
            window.removeEventListener("mousemove", this.state.dragState.mouseMoveHandler);
            delete this.state.dragState;
        };

        handleMouseMove(event) {
            if (this.state.dragState) {
                let x = event.pageX - this.state.dragState.mouseDownLeft;
                let y = event.pageY - this.state.dragState.mouseDownTop;

                this.state.left = this.state.dragState.oldLeft + x;
                this.state.top = this.state.dragState.oldTop + y;
                this.setState(this.state);
            }
        };

        render() {
            this.state.style = this.props.style || {};
            this.state.style.top = this.state.top || this.state.style.top || this.props.top;
            this.state.style.left = this.state.left || this.state.style.left || this.props.left;
            this.state.style.height = this.state.height || this.state.style.height || this.props.height;

            this.state.style.position = this.props.position;
            if (!this.state.style.position && (this.state.style.top || this.state.style.left))
                this.state.style.position = "relative";

            // if (this.state.style.height && !this.state.style.display) {
            //     if (this.state.style.display)
            // }


            if (this.props.isDraggable) {
                this.state.onMouseDown = this.handleMouseDown.bind(this);
                this.state.onMouseUp = this.handleMouseUp.bind(this);
            }
            else {
                delete this.state.onMouseDown;
                delete this.state.onMouseUp;
            }

            return (
                <span
                    className="apanel"
                    style={this.state.style}
                    onMouseDown={this.state.onMouseDown}
                    onMouseUp={this.state.onMouseUp}
                >
                    Привет уроды 23!
                    {this.props.children}
                </span>
            );
        }
    }
}

