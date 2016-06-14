/// <reference path="BaseComponent.tsx" />

namespace Buhta {
    export interface TabsProps extends BaseComponentProps {
        //message?: string;
        //compiler: string;
        //framework: string;
        //onClick?: React.ReactEventHandler;
    }

    export interface TabsState extends BaseComponentState {
        tabs: TabProps[];

    }

    export class Tabs extends BaseComponent<TabsProps, TabsState> {

        constructor(props: TabsProps, context) {
            super(props, context);
        }

        createStateTabList() {
            this.state.tabs = React.Children.map(this.props.children, ((child, index) => {
                if (Util.getReactElementClassName(child) !== "Tab")
                    console.error("only children of type 'Tab' allowed in 'Tabs'");
                return (child as any).props as TabProps;
            }));

        }


        render() {
            if (!this.state.tabs) {
                this.createStateTabList();
            }

            return (
                <div className={this.renderClassName()}>
                    <ul className="nav nav-tabs">
                        { this.state.tabs.map(((child, index) => {

                            return (
                                <li ref={child.id} key={index} className={child.active ? "active" : null}>
                                    <a href={"#" + child.id } data-toggle="tab">
                                        { child.title }
                                    </a>
                                </li>);

                        }))}

                    </ul>

                    <div className="tab-content">
                        { this.props.children }
                    </div>

                </div>
            );

        }
    }

    export interface TabProps extends BaseComponentProps {
        title: string;
        id: string;
        active?: boolean;
    }

    export interface TabState extends BaseComponentState {
        active: boolean;
    }

    export class Tab extends BaseComponent<TabProps, TabState> {

        constructor(props: TabProps, context) {
            super(props, context);
        }

        //renderTitle(): JSX.Element {
        //    return <span>{this.props.title}</span>;

        //}

        render() {

            this.addClassName("tab-pane");
            if (this.props.active)
                this.addClassName("active");
            else
                this.removeClassName("active");
            return (
                <div className={this.renderClassName() } id={this.props.id}>{this.props.children}</div>
            );
        }
    }


}