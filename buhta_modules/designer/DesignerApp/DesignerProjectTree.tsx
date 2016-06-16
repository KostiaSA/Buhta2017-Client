namespace Buhta {

    import designerAppDispatcher = Buhta.designerAppDispatcher;
    export interface DesignerProjectTreeProps extends BaseComponentProps {
    }

    export interface DesignerProjectTreeState extends BaseComponentState {
        //x3: number;
    }


    export class DesignerProjectTree extends BaseComponent<DesignerProjectTreeProps, DesignerProjectTreeState> {

        constructor(props: DesignerProjectTreeProps, context) {
            super(props, context);
            //this.state = {};
        }

        //this.addClassName();

        projectDataSource: TreeGridDataSource<ComponentInfo>; // Buhta.componentRegistry

        createProjectDataSource() {
            this.projectDataSource = [];
            _.values(Buhta.componentRegistry).forEach((comp: ComponentInfo) => {
                let compName = comp.name + "  (" + comp.className + ")";
                let row = new GridTreeNodeData<ComponentInfo>();
                row.title = compName;
                row.id = comp.moduleName + "." + comp.className;
                row.parent = comp.parent;
                row.rowData = comp;

                this.projectDataSource.push(row);
            });
        }

        rowDblClick(row: ComponentInfo): boolean {
            //alert("dbl " + row.name);
            designerAppDispatcher.action.openComponent(row.id);
            return false;
        };


        render() {
            if (!this.projectDataSource) {
                this.createProjectDataSource();
            }

            class ProjectTreeGrid extends TreeGrid<ComponentInfo> {
            }


            return (
                <ProjectTreeGrid
                    dataSource={this.projectDataSource}
                    isNeedConvertFlatDataToTree={true}
                    onRowDblClick={this.rowDblClick.bind(this)}
                >
                    <TreeGridColumn caption="элемент"></TreeGridColumn>
                </ProjectTreeGrid>
            );
        }
    }
}

