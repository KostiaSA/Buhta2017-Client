namespace Buhta {

    export interface DesignerProjectTreeProps extends BaseComponentProps {
        //name: string;
    }

    export interface DesignerProjectTreeState extends BaseComponentState {
        //x3: number;
    }


    export class DesignerProjectTree extends BaseComponent<DesignerProjectTreeProps, DesignerProjectTreeState> {

        constructor(props: AppProps, context) {
            super(props, context);
            //this.state = {};
        }

        //this.addClassName();

        projectDataSource: TreeGreedDataSource<ComponentInfo>; // Buhta.componentRegistry

        createProjectDataSource() {
            this.projectDataSource = [];
            _.values(Buhta.componentRegistry).forEach((comp: ComponentInfo) => {
                let compName = comp.name + "  (" + comp.className + ")";
                let row = new GridTreeNodeData<ComponentInfo>();
                row.title = compName;
                row.id = comp.moduleName + "." + comp.className;
                row.parent = comp.parent;

                this.projectDataSource.push(row);
            });
        }


        render() {
            if (!this.projectDataSource) {
                this.createProjectDataSource();
            }

            class ProjectTreeGrid extends TreeGrid<ComponentInfo> {
            }


            return (
                <ProjectTreeGrid dataSource={this.projectDataSource} isNeedConvertFlatDataToTree={true}>
                    <TreeGridColumn caption="элемент"></TreeGridColumn>
                </ProjectTreeGrid>
            );
        }
    }
}

