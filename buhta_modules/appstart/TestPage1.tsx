namespace Buhta {

    export interface TestPage1Props {
    }

    export interface TestPage1State {
        dataTable?: DataTable;
    }

    export class TestPage1 extends React.Component<TestPage1Props, TestPage1State> {

        constructor(props: TestPage1Props, context) {
            super(props, context);
            this.state = {};
        }

        //this.addClassName();
        loadDataset() {
            if (!this.state.dataTable) {
                executeSQL("select top 5000 Номер,Название,getdate() дата from ТМЦ order by Ключ")
                    .done((table) => {
                        alert(table.rows[0].getValue(1));
                        this.state.dataTable = table;
                        this.setState(this.state);
                        this.forceUpdate();
                    })
                    .fail((err) => {
                        alert(err.message);
                    });
            }
        }

        //}


        renderTable() {
            this.loadDataset();
            if (!this.state.dataTable)
                return [<div>пусто</div>];
            else
                return this.state.dataTable.rows.map((row) => {
                    return <div>{row["Название"]}</div>;
                });


        }


        render() {

            return (
                <div>
                    Привет уроды!
                    {this.renderTable()}
                </div>
            );
        }
    }
}

