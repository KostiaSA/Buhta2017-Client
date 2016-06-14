/// <reference path="../../../typings/index.d.ts" />
/// <reference path="../../../buhta_modules/core/dist/core.d.ts" />
/// <reference path="../../../buhta_modules/components/dist/components.d.ts" />
/// <reference path="../../../buhta_modules/designer/dist/designer.d.ts" />
declare namespace TestModule {
    class TestComp2 extends Buhta.DesignedComponent {
        constructor();
        name: string;
        sqlname: string;
        проблема: string;
    }
}
declare namespace TestModule {
    class Org extends Buhta.Table {
        constructor();
    }
}
declare namespace TestModule {
    class TestComp1 extends TestComp2 {
        constructor();
    }
}
declare namespace TestModule {
    class TestModule extends Buhta.Module {
        constructor();
    }
}
