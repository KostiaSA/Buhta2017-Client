/// <reference path="BasePropertyEditor.tsx" />

namespace Buhta {

    export class BaseCollectionPropertyEditor extends BasePropertyEditor {

        constructor(propertyPage: string, propertyGroup: string, propertyDescription: string,
                    public collectionAddMethodName: string) {
            super(propertyPage, propertyGroup, propertyDescription);
        }


        emitTsCode(tsCode: TsCode, assignName: string) {
            let collection = this.designedObject[this.propertyName] as Array<DesignedObject>;
            collection.forEach((collectionItem) => {

                // this.addColumn((col) => {
                //     col.name = "Номер";
                // });
                let itemName = this.collectionAddMethodName.toLocaleLowerCase();
                if (_.startsWith(itemName, "add"))
                    itemName = itemName.slice(3);
                tsCode.addRaw(assignName + "." + this.collectionAddMethodName + "((" + itemName + ") => {");

                collectionItem.registerPropertyEditors();
                collectionItem.propertyEditors.forEach((editor) => {
                    editor.designedObject = collectionItem;
                    editor.emitTsCode(tsCode, itemName);
                });

                tsCode.addRaw("});\n");

            });
        }
    }


}