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
                executeSQL("select top 1000 Номер,Название,getdate() дата from ТМЦ order by Ключ")
                    .done((table) => {
                        alert(table.rows[0].getValue(1));
                        this.state.dataTable = table;
                        //this.setState(this.state);
                        //this.forceUpdate();
                    })
                    .fail((err) => {
                        alert(err.message);
                    });
            }
        }

        //}

        maxRows: number = 0;

        partialLoad() {
            this.maxRows += 200000;
            console.log("load " + this.maxRows);
            if (this.maxRows < this.state.dataTable.rows.length) {
                setTimeout(this.partialLoad.bind(this), 10);
            }
            this.forceUpdate();
        }


        renderTable() {
            this.loadDataset();

            //console.log("render start");
            if (!this.state.dataTable)
                return [<div>пусто</div>];
            else {
                let x = this.state.dataTable.rows
                    .filter((row, index) => {
                        return index < this.maxRows;
                    })
                    .map((row) => {
                        return <div><span>{row["Номер"]}</span> <span>{row["Название"]}</span><span>{row["Номер"]}</span> <span>{row["Название"]}</span> </div>;
                    });
                //  console.log("render end");
                return x;
            }
        }


        render() {

            return (
                <div>
                    Привет уроды 23!
                    <button onClick={this.partialLoad.bind(this)}>render {this.maxRows}</button>
                    {this.renderTable()}
                </div>
            );
        }
    }
}

