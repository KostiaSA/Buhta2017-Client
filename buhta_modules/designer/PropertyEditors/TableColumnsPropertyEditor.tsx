
namespace Buhta {

    export class TableColumnsPropertyEditor extends BaseCollectionPropertyEditor {

        // constructor(propertyPage: string, propertyGroup: string, propertyDescription?: string) {
        //     super(propertyPage, propertyGroup, propertyDescription);
        // }

        getPropertyType(): string {
            return "Array<TableColumn>";
        }


        renderEditor(index: number): JSX.Element {

            /*
             Binder
             this.designedObject.addWatch(this.propertyName, (name, oldVal, newVal) => {
             console.log('change 1 ' + name +" "+oldVal+" -> "+newVal);
             });
             */

            return (
                <div className="form-group" key={index.toString() }>
                    <label className="col-sm-3 control-label">{this.propertyName}</label>
                    <div className="col-sm-9">
                        <Input
                            type={InputType.Text}
                            className="form-control"
                            style={{ maxWidth: 500 }}
                            bindObj={this.designedObject}
                            bindProp={this.propertyName}
                        >
                        </Input>
                        <small className="error-text hidden"></small>
                    </div>
                </div >
            );
        }

        // valueLink = { this.designedObject[this.propertyName] } >

    }


}