export default Helper;
declare namespace Helper {
    function transformToMatrix(val: string, baseMatrixOrTransform?: object | string): string;
    function normalizeTransform(val: string, baseMatrixOrTransform?: object | string): string;
    function boundingUnderTransform(matrix: any, t: any, r: any, b: any, l: any): {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
}
//# sourceMappingURL=helper.d.ts.map