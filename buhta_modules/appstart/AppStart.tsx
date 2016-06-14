/// <reference path="references.ts" />

declare var ReactDOM: any;

var socket = io.connect();

namespace Buhta {

    socket.once('connect', () => {

        $(document).ready(() => {

            //  sok?      var socket = io.connect({ host: "localhost", port: "3010" });


            console.log('cooned');

            $(".squel").click(() => {

                let ms = Knex({
                    dialect: 'mssql'
                });

                let x = new Date();

                // var sql = ms.select('Номер', 'Название', ms.raw('1213 as uu ')).from('ТМЦ').where("x", "<>", x).limit(5).toString();
                //alert(sql);

                var sql1 = ms.select('Номер', 'Название', ms.raw('1213 as uu ')).from('ТМЦ').where("x", "<>", x).limit(5);

                var queryId = 'q' + Math.random().toString(36).slice(2);
                socket.emit("executeSQL", {queryId, sql: "sql1"});
                //let squelPostgres = squel.useFlavour('mssql');

                //console.log(???
                //    squelPostgres.insert({ autoQuoteFieldNames: true })
                //        .into('table')
                //        .set('field', 5)
                //        .set('мама 5', 5)
                //      //  .returning('*')
                //        .toParam()
                //);
            });

            $(".test-table").click(() => {

                componentRegistry["Buhta.Org"] = {
                    className: "Org",
                    inheritFrom: "Buhta.Table",
                    name: "Тестовый компонент 12",
                    moduleName: "TestModule",
                    references: ["references.ts", "testcomp2.ts"],
                    description: "это тестовый компонент таблицы Организация",
                    createInstance: null
                };

                let x = new Table();
                x.$$className = "Buhta.Org";
                x.addColumn((col) => {
                    col.name = "Номер";
                });
                x.addColumn((col) => {
                    col.name = "Название";
                });
                x.addColumn((col) => {
                    col.name = "Город";
                });
                x.sqlName = "Организация";

                x.saveToServer()
                    .done(() => {
                        alert("ok!");
                    })
                    .fail((err) => {
                        alert(err);
                    });
            });


            //let x = new SchemaTable();
            //x.name = "жопа";
            //x.sqlname = "sql-жопа";

            $(".but").click(() => {

                // let x = new TestComp1();
                //
                // x.className = "TestComp1";
                // x.inheritFrom = "TestComp2";
                // //x.inheritFrom = "Buhta.DesignedComponent";
                //
                // x.name = "Тестовый компонент 12";
                // x.sqlName = "sql база ps-web";
                // x.moduleName = "TestModule";
                // x.references = ["references.ts", "testcomp2.ts"];
                //
                // writeTextFile(x.moduleName, x.className + ".ts", x.emitTsCode())
                //     .done(() => {
                //         alert("все хорошо!");
                //     })
                //     .fail((err) => {
                //         alert(err);
                //     });
                //
                // alert(x.emitTsCode());


                // for (let i: number = 0; i < 10000; i++) {
                executeSQL("select top 10 Номер,Название,getdate() дата from ТМЦ order by Ключ")
                    .done((table) => {
                        alert(table.rows[0].getValue(1));
                    })
                    .fail((err) => {
                        alert(err.message);
                    });
                //}
            });
            //        $(".but").click(() => {

            //            var queryId = 'q' + Math.random().toString(36).slice(2);

            ////            socket.emit("executeSQL", { queryId: queryId, sql: "select top 10 Номер, Название, Ключ, getdate() from ТМЦ" });
            //            socket.emit("executeSQL", { queryId: queryId, sql: "select top 100 getdate() дата, 0x010101010202020204040404 image, номер from ТМЦ" });

            //            socket.once(queryId, (rows) => {
            //                alert('get rows');
            //            });
            //        });

            //alert(x.sqlname + x.coreName);

            // ReactDOM.render(
            //     <App name="Buhta 2017">
            //         <DesignerStartPage>
            //         </DesignerStartPage>
            //
            //     </App>,
            //     document.getElementById("content")
            // );

           // ReactDOM.renderComponent(null, document.body);

            ReactDOM.render(
                <DesignerApp>

                </DesignerApp>,
                document.body
            );
        });
    });
}
