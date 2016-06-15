namespace Buhta {

    export interface DesignerStartPageProps {
        //compiler: string;
        //framework: string;
        //onClickHandler?: __React.ReactEventHandler;
    }

    export interface DesignerStartPageState {
        text1?: string;
        text2?: string;
        //designedObject: DesignedComponent;
    }

    export class DesignerStartPage extends React.Component<DesignerStartPageProps, DesignerStartPageState> {

        constructor(props: DesignerStartPageProps, context) {
            super(props, context);
            this.state = {};
            this.state.text1 = "!227-+1w2w5411111";
            this.state.text2 = "2552222";

        }

        handleChange1(event: React.SyntheticEvent) {
            // console.log("change 1x1111 ==>" + (event.target as any).value);
            // this.state["жопа"] = (event.target as any).value;
            // this.setState({text2: (event.target as any).value, text1: (event.target as any).value});
            // // //this.setState({text2: "(event.target as any).value}"});
            // // this.state.text2 = "(event.target as any).value}";
            // // this.setState({});
            // console.log(this.state);
            this.state.text1 = (event.target as any).value;
//            this.setState({});
        }

        handleChange2(event: React.SyntheticEvent) {
            // this.state["жопа"] = (event.target as any).value;
            // this.setState({});
            // console.log("change 2x22 ==>" + (event.target as any).value);
        }

        // componentWillUnmount() {
        //     console.log("componentWillUnmount");
        // }
        //
        // componentWillMount() {
        //     console.log("componentWillMount");
        // }

        render() {

            // this.state.watch("text1", (prop, newValue, oldValue) => {
            //     console.log("watch(жопа)");
            // });


            // WatchJS.watch(this.state, "q11", () => {
            //     console.log("watch(жопа)");
            //     this.state.text2 = "---" + this.state.text1;
            //     this.setState({});
            //
            // });


            return (
                <div className="container">
                    <h1>Бухта 7.0</h1>
                    <button className="test-table">
                        Test table
                    </button>
                    <Input
                        type={InputType.Text}
                        bindObj={this.state}
                        style={{ width: 450 }}
                        bindProp="text1">
                    </Input>
                    <div>{ this.state["жопа"] }</div>
                    <input
                        type="text"
                        className="223"
                        style={{ maxWidth: 400 }}
                        value={this.state.text2}
                        onChange={ this.handleChange2.bind(this) }>
                    </input>
                </div>
            );
        }
    }

}
//export var QQQ: String = "qqq-str";

//alert('жопа1-123-==');
