namespace Buhta {


    export class BasePropertyEditor extends React.Component<Object, Object> {
        constructor(public propertyPage: string, public propertyGroup: string, public propertyDescription?: string) {
            super();
            this.state = {designedComponent: {}};
        }

        propertyName: string;
        designedObject: DesignedObject;

        getPropertyType(): string {
            return "Object";
        }

        renderEditor(index: number): JSX.Element {
            return (<span>editor not defined</span>);
        }

        emitTsCode(tsCode: TsCode, assignName: string) {
            tsCode.addProperty(assignName, this.propertyName, this.getPropertyType(), this.designedObject[this.propertyName]);
        }

    }


}