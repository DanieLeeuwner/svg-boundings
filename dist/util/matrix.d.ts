export default Matrix;
declare function Matrix(value: any): void;
declare class Matrix {
    constructor(value: any);
    value: any;
    row: any;
    col: any;
    toString(): string;
    to2dTransformString(): string;
    e(row: any, col: any): any;
    x(matrix: any): Matrix;
}
declare namespace Matrix {
    function identity(dimensions: any): Matrix;
    function rotate(angle: any): Matrix;
    function scale(sx: any, sy: any): Matrix;
    function scaleX(sx: any): Matrix;
    function scaleY(sy: any): Matrix;
    function skew(ax: any, ay: any): Matrix;
    function skewX(ax: any): Matrix;
    function skewY(ay: any): Matrix;
    function translate(tx: any, ty: any): Matrix;
    function translateX(tx: any): Matrix;
    function translateY(ty: any): Matrix;
    function matrix(a: any, b: any, c: any, d: any, e: any, f: any): Matrix;
}
//# sourceMappingURL=matrix.d.ts.map