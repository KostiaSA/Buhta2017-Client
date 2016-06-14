type ObjectWatchCallback = (prop: string, action: string, newValue: any, oldValue: any) => void;
//type ObjectWatchCallback = (prop: string, oldValue: any, newValue: any) => void;
//type ObjectWatchCallbackRecord =  { prop: string, lastValue: any, callback: (prop: string, oldValue: any, newValue: any) => void};

interface Object {
    watch(obj: Object, prop: string, onChange: ObjectWatchCallback);
    unwatch(obj: Object, prop: string);
    //   objectWatchersListProp: Array<ObjectWatchCallback>;
}
//const objectWatchersListProp = "ije4xlupxsadr3mybf1ug14i";

declare var WatchJS: any;

// const objectWatchersListProp = "ije4xlupxsadr3mybf1ug14i";
// const objectWatchersTimeIdProp = "fpbvyxhfpo5zjsiiizhcnxw29";
// const watchPeriod = 2000;
//
// Object.defineProperty(Object.prototype, "watchProp",
//     {
//         writable: false,
//         configurable: false,
//         enumerable: false,
//         value: (prop: string, onChange: ObjectWatchCallback) => {
//             if (!this[objectWatchersListProp])
//                 this[objectWatchersListProp] = [];
//
//             let watchersList = this[objectWatchersListProp] as Array<ObjectWatchCallbackRecord>;
//
//             let lastValue: any = this[prop];
//             if (!lastValue)
//                 lastValue = eval("this." + prop);
//
//             watchersList.push({prop: prop, lastValue: lastValue, callback: onChange});
//             if (!this[objectWatchersTimeIdProp]) {
//                 this[objectWatchersTimeIdProp] = setInterval(() => {
//                     watchersList.forEach((watcher) => {
//                         console.log("check prop: " + watcher.prop);
//                         let oldValue = watcher.lastValue;
//                         let newValue = this[watcher.prop];
//                         if (!newValue)
//                             newValue = eval("this." + watcher.prop);
//                         if (newValue !== oldValue) {
//                             console.log("new prop: " + watcher.prop);
//                             watcher.lastValue = newValue;
//                             watcher.callback(watcher.prop, oldValue, newValue);
//                         }
//                     });
//
//                 }, watchPeriod);
//             }
//             // WatchJS.watch(this, prop, onChange);
//         }
//     });

let watchCount = 0;
Object.defineProperty(Object.prototype, "watch",
    {
        writable: false,
        configurable: false,
        enumerable: false,
        value: (prop: string, onChange: ObjectWatchCallback) => {
            WatchJS.watch(this, prop, onChange);

            watchCount++;
            console.log(prop);
            console.log(this);
            console.log("start watch: " + watchCount);
        }
    });
