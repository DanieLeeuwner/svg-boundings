declare namespace _default {
    export let line: (line: any) => {
        left: number;
        top: number;
        right: number;
        bottom: number;
        width: number;
        height: number;
    };
    export let rect: (rect: any) => {
        top: number;
        bottom: number;
        left: number;
        right: number;
    } | {
        left: any;
        top: any;
        right: any;
        bottom: any;
        width: any;
        height: any;
    };
    export let circle: (circle: any) => {
        left: number;
        top: number;
        right: any;
        bottom: any;
        width: number;
        height: number;
    };
    export let ellipse: (ellipse: any, shouldReturnTrueBounding: any) => {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    export let polygon: (polygon: any) => {
        left: number;
        top: number;
        right: number;
        bottom: number;
        width: number;
        height: number;
    };
    export let polyline: (polyline: any) => {
        left: number;
        top: number;
        right: number;
        bottom: number;
        width: number;
        height: number;
    };
    export let path: (path: any, shouldReturnTrueBounding: any) => {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    export let shape: (shape: any, needTrueBounding: any) => {
        top: number;
        bottom: number;
        left: number;
        right: number;
    } | {
        left: any;
        top: any;
        right: any;
        bottom: any;
        width: any;
        height: any;
    };
    export { boundingOfImage as image };
    export { boundingOfText as text };
    export { boundingOfGradient as gradient };
}
export default _default;
import boundingOfImage from "./lib/image_bounding";
import boundingOfText from "./lib/text_bounding";
import boundingOfGradient from "./lib/gradient_bounding";
//# sourceMappingURL=index.d.ts.map