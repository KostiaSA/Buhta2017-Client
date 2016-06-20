/// <reference path="./dxcomponent.tsx" />

namespace Buhta {

    export interface DxButtonProps extends DxComponentProps {
        text?: string;
        onClick?: () => void;
    }


    export interface DxButtonState extends DxComponentState {

    }

    export class DxButton extends DxComponent<DxButtonProps, DxButtonState> {

        constructor(props: DxButtonProps, context) {
            super(props, context);
//            this.state = {css: {}};
        }


        createDxOptions(old: DxButtonProps, next: DxButtonProps): DevExpress.ui.dxButtonOptions {
            let opts: DevExpress.ui.dxButtonOptions = {};
            if (old.text !== next.text)
                opts.text = next.text;
            if (old.onClick !== next.onClick)
                opts.onClick = this.handleOnClick();
            return opts;
        }

        handleOnClick() {
            if (this.props.onClick)
                this.props.onClick();
            console.log("handleOnClick");
        }

        protected didMount() {
            super.didMount();

            let opt = this.createDxOptions({}, this.props);
            $(this.state.nativeElement).dxButton(opt);

        }

        render() {

            return (
                <div ref={(e) => this.state.nativeElement = e}>
                </div>
            );
        }
    }
}

