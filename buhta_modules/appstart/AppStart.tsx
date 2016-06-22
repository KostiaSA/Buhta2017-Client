// <reference path="references.ts" />

namespace Buhta {

    declare var ReactDOM: any;

    let socket = io.connect();

    socket.once("connect", () => {

        $(document).ready(() => {

            //  sok?      var socket = io.connect({ host: "localhost", port: "3010" });


            console.log("$(document).ready()");

            // $(".squel").click(() => {
            //
            //     let ms = Knex({
            //         dialect: "mssql"
            //     });
            //
            //     let x = new Date();
            //
            //     // var sql = ms.select('Номер', 'Название', ms.raw('1213 as uu ')).from('ТМЦ').where("x", "<>", x).limit(5).toString();
            //     //alert(sql);
            //
            //     var sql1 = ms.select('Номер', 'Название', ms.raw('1213 as uu ')).from('ТМЦ').where("x", "<>", x).limit(5);
            //
            //     var queryId = 'q' + Math.random().toString(36).slice(2);
            //     socket.emit("executeSQL", {queryId, sql: "sql1"});
            //     //let squelPostgres = squel.useFlavour('mssql');
            //
            //     //console.log(???
            //     //    squelPostgres.insert({ autoQuoteFieldNames: true })
            //     //        .into('table')
            //     //        .set('field', 5)
            //     //        .set('мама 5', 5)
            //     //      //  .returning('*')
            //     //        .toParam()
            //     //);
            // });

            // $(".test-table").click(() => {
            //
            //     // componentRegistry["Buhta.Org"] = {
            //     //     className: "Org",
            //     //     inheritFrom: "Buhta.Table",
            //     //     name: "Тестовый компонент 12",
            //     //     moduleName: "TestModule",
            //     //     references: ["references.ts", "testcomp2.ts"],
            //     //     description: "это тестовый компонент таблицы Организация",
            //     //     createInstance: null
            //     // };
            //
            //     let x = new Table();
            //     x.$$className = "Buhta.Org";
            //     x.addColumn((col) => {
            //         col.name = "Номер";
            //     });
            //     x.addColumn((col) => {
            //         col.name = "Название";
            //     });
            //     x.addColumn((col) => {
            //         col.name = "Город";
            //     });
            //     x.sqlName = "Организация";
            //
            //     x.saveToServer()
            //         .done(() => {
            //             alert("ok!");
            //         })
            //         .fail((err) => {
            //             alert(err);
            //         });
            // });
            //

            //let x = new SchemaTable();
            //x.name = "жопа";
            //x.sqlname = "sql-жопа";

            // $(".but").click(() => {
            //
            //     // let x = new TestComp1();
            //     //
            //     // x.className = "TestComp1";
            //     // x.inheritFrom = "TestComp2";
            //     // //x.inheritFrom = "Buhta.DesignedComponent";
            //     //
            //     // x.name = "Тестовый компонент 12";
            //     // x.sqlName = "sql база ps-web";
            //     // x.moduleName = "TestModule";
            //     // x.references = ["references.ts", "testcomp2.ts"];
            //     //
            //     // writeTextFile(x.moduleName, x.className + ".ts", x.emitTsCode())
            //     //     .done(() => {
            //     //         alert("все хорошо!");
            //     //     })
            //     //     .fail((err) => {
            //     //         alert(err);
            //     //     });
            //     //
            //     // alert(x.emitTsCode());
            //
            //
            //     // for (let i: number = 0; i < 10000; i++) {
            //     executeSQL("select top 10 Номер,Название,getdate() дата from ТМЦ order by Ключ")
            //         .done((table) => {
            //             alert(table.rows[0].getValue(1));
            //         })
            //         .fail((err) => {
            //             alert(err.message);
            //         });
            //     //}
            // });
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

            // ReactDOM.render(
            //     <DesignerApp>
            //
            //     </DesignerApp>,
            //     document.body
            // );
            // ReactDOM.render(
            //     <div>
            //         <div id="button33"></div>
            //         <APanel top={20} left={40} isDraggable={true}>
            //               нет
            //         </APanel>
            //         <APanel top={70} left={140} height={200} isDraggable={true}>
            //
            //         </APanel>
            //     </div>,
            //     document.body
            // );

            // $("#button33").dxButton({
            //     text: 'Click me',
            //     onClick: function() {
            //         console.log('Button clicked');
            //     }
            // });

            //Text12 = <button>привет</button>;


            ReactDOM.render(
                <div>
                    <XTreeGrid visible={true} dataSource={ window["xxxx"]} treeMode={true} hierarchyFieldName="Номер" hierarchyDelimiters=".">
                        <XTreeGridColumns>
                            <XTreeGridColumn caption="Колонка1" fieldName="Ключ" showHierarchyTree={true}>
                            </XTreeGridColumn>
                            <XTreeGridColumn caption="Колонка2" fieldName="Номер">
                            </XTreeGridColumn>
                            <XTreeGridColumn caption="Колонка3" fieldName="Название">
                            </XTreeGridColumn>
                        </XTreeGridColumns>
                    </XTreeGrid>
                </div>,
                document.body
            );

            // executeSQL("select top 500 Номер,Название,_Модель Дата from ТМЦ order by Ключ")
            //     .done((table) => {
            //         window["xxx"] = table.rows.map((r)=> {
            //             return {Номер: r["Номер"], Название: r["Название"], Дата: r["Дата"]};
            //         });
            //
            //         console.log("select top X1 Номер,Название,getdate() Дата from ТМЦ order by Ключ --> " + table.rows[0].getValue(1));
            //     })
            //     .fail((err) => {
            //         alert(err.message);
            //     });

            // executeSQL("select TOP 500 Ключ,Номер,Название from [Вид ТМЦ] order by Номер")
            //     .done((table) => {
            //         window["xxxx"] = table.rows.map((r) => {
            //             return {Ключ: r["Ключ"], Номер: r["Номер"], Название: r["Название"]};
            //         });
            //
            //         console.log("select Ключ,Номер,Название from [Вид ТМЦ] order by Ключ --> " + table.rows[0].getValue(2));
            //     })
            //     .fail((err) => {
            //         alert(err.message);
            //     });
        });
    });
}
