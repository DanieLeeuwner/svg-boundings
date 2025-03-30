declare namespace _default {
    export { arcToBezier };
    export { argsFromPathD };
    export { applyMatrixToPoint };
    export { expandPathTransform };
}
export default _default;
declare function arcToBezier(lastPoint: any, arcParams: any): any[][];
/**
 * Parse a section of SVG path's d attribute
 * Say，d="M70,100L230,100A20,10,0,0,1,250,110L250,190"
 * You can pass "L230,100" as the argument, and get [230, 100] as output
 * @param {string} str - a section of the SVG path's d attribute
 * @returns {array} - an array of numbers
 */
declare function argsFromPathD(str: string): any[];
declare function applyMatrixToPoint(matrix: any, x: any, y: any): {
    x: any;
    y: any;
};
declare function expandPathTransform(d: any, transform: any): any;
//# sourceMappingURL=path.d.ts.map