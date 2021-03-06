/// <reference path="references.ts" />
/// <reference path="testcomp2.ts" />
namespace TestModule {
    export class Org extends Buhta.Table {
        constructor() {
            // constructor code is auto-generated by buhta designer Thu Jun 16 2016
            super();
            this.$$className = "TestModule.Org"
            this.sqlName = "Организация XXX";
            this.addColumn((column) => {
                column.name = "Номер";
            });

            this.addColumn((column) => {
                column.name = "Название";
            });

            this.addColumn((column) => {
                column.name = "Город";
            });

            // constructor code is auto-generated by buhta designer
        }
    }
}

// this code is auto-generated by buhta designer
Buhta.registerComponent((comp) => {
    comp.name = "Организация";
    comp.moduleName = "TestModule";
    comp.className = "Org";
    comp.inheritFrom = "Buhta.Table";
    comp.parent = "TestModule.TestModule";
    comp.description = "это тестовое приложение";
    comp.references = ["references.ts", "testcomp2.ts"];
    comp.createInstance = () => new TestModule.Org();
});
// this code is auto-generated by buhta designer