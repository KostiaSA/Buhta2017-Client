/// <reference path="../../../typings/index.d.ts" />
/// <reference path="../../core/dist/core.d.ts" />
/// <reference path="../../components/dist/components.d.ts" />
/// <reference path="../../designer/dist/designer.d.ts" />
declare var ReactDOM: any;
declare var socket: SocketIOClient.Socket;
declare namespace Buhta {
}
declare namespace Buhta {
    interface TestPage1Props {
    }
    interface TestPage1State {
        dataTable?: DataTable;
    }
    class TestPage1 extends React.Component<TestPage1Props, TestPage1State> {
        constructor(props: TestPage1Props, context: any);
        loadDataset(): void;
        renderTable(): JSX.Element[];
        render(): JSX.Element;
    }
}
