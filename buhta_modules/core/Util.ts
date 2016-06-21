


namespace Buhta {

    export class Util {

        static getReactElementClassName(element): string {
            return element && element.type ? element.type.toString().split("(")[0].split(" ")[1] : "";
        }


    }


    //     export declare class String {
    //     static removeLastChars(str: string, template: string): string {
    //         str.toLocaleString()
    //         if (_.endsWith(str, template))
    //             return str.substring(0, str.length - template.length);
    //         else
    //             return str;
    //     }
    // }
}