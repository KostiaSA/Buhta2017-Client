/// <reference path="../typings/index.d.ts" />
/// <reference path="../buhta_modules/designer/dist/designer.d.ts" />
/// <reference path="references.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TestApplication;
(function (TestApplication_1) {
    var TestApplication = (function (_super) {
        __extends(TestApplication, _super);
        function TestApplication() {
            // constructor code is auto-generated by buhta designer
            _super.call(this);
            this.$$className = "TestApplication.TestApplication";
            // constructor code is auto-generated by buhta designer
        }
        return TestApplication;
    }(Buhta.Application));
    TestApplication_1.TestApplication = TestApplication;
})(TestApplication || (TestApplication = {}));
// this code is auto-generated by buhta designer
Buhta.registerComponent(function (comp) {
    comp.name = "Тестовое приложение";
    comp.moduleName = "TestApplication";
    comp.className = "TestApplication";
    comp.inheritFrom = "";
    comp.parent = undefined;
    comp.description = "это тестовое приложение";
    comp.references = ["references.ts", "testcomp2.ts"];
    comp.createInstance = function () { return new TestApplication.TestApplication(); };
});
// this code is auto-generated by buhta designer 
//# sourceMappingURL=Application.js.map