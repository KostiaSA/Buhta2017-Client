/// <reference path="references.ts" />
/// <reference path="testcomp2.ts" />
namespace TestModule {
    export class TestModule extends Buhta.Module {
        constructor() {
            // constructor code is auto-generated by buhta designer
            super();
            this.$$className = "TestModule.TestModule"

            // constructor code is auto-generated by buhta designer
        }
    }
}

// this code is auto-generated by buhta designer
Buhta.registerComponent((comp) => {
    comp.name = "тестовый модуль 1";
    comp.moduleName = "TestModule";
    comp.className = "TestModule";
    comp.inheritFrom = "Buhta.Module";
    comp.parent = "TestApplication.TestApplication";
    comp.description = "это тестовый модуль";
    comp.references = ["references.ts", "testcomp2.ts"];
    comp.createInstance = () => new TestModule.TestModule();
});
// this code is auto-generated by buhta designer