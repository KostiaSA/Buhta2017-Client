/// <reference path="BaseComponent.tsx" />

namespace Buhta {

    export interface AppProps {
        name: string;
    }

    export interface AppState {
        x3: number;
    }

    export class App extends React.Component<AppProps, AppState> {

        constructor(props: AppProps, context) {
            super(props, context);
            this.state = { x3: 0 };
        }

        render() {
            return (
                <div>Welcome to SPA application
                    {this.props.children}
                </div>
            );
        }
    }
}

