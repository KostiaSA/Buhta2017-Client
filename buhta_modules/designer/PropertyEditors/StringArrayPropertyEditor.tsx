namespace  Buhta {

    export class StringArrayPropertyEditor extends BasePropertyEditor {

        constructor(propertyPage: string, propertyGroup: string, propertyDescription?: string) {
            super(propertyPage, propertyGroup, propertyDescription);
        }

        getPropertyType(): string {
            return "string";
        }

        handleChange(event: React.SyntheticEvent) {
            this.designedObject[this.propertyName] = (event.target as any).value;
            console.log("change === " + this.propertyName + " " + this.designedObject[this.propertyName]);
        }

        emitTsCode(tsCode: TsCode, assignName: string) {
            let rawCode = "[";
            (this.designedObject[this.propertyName] as Array<string>).forEach((strValue) => {
                rawCode += JSON.stringify(strValue) + ",";
            });
            rawCode = rawCode.removeLastChars(",");
            rawCode += "]";

            tsCode.addPropertyRaw(assignName, this.propertyName, this.getPropertyType(), this.designedObject[this.propertyName]);
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
                        <input
                            type="text"
                            className="form-control"
                            style={{ maxWidth: 500 }}
                            onChange={ this.handleChange.bind(this) }>
                        </input>
                        <small className="error-text hidden"></small>
                    </div>
                </div >
            );
        }

        // valueLink = { this.designedObject[this.propertyName] } >

    }
}