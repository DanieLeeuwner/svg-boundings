declare namespace _default {
    export { boundingRectOfLine as line };
    export { boundingRectOfRect as rect };
    export { boundingRectOfCircle as circle };
    export { boundingRectOfEllipse as ellipse };
    export { boundingRectOfPolygon as polygon };
    export { boundingRectOfPolyline as polyline };
    export { boundingRectOfPath as path };
    export { boundingRectOfShape as shape };
}
export default _default;
declare function boundingRectOfLine(line: any): {
    left: number;
    top: number;
    right: number;
    bottom: number;
    width: number;
    height: number;
};
declare function boundingRectOfRect(rect: any): {
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
declare function boundingRectOfCircle(circle: any): {
    left: number;
    top: number;
    right: any;
    bottom: any;
    width: number;
    height: number;
};
declare function boundingRectOfEllipse(ellipse: any, shouldReturnTrueBounding: any): {
    top: number;
    bottom: number;
    left: number;
    right: number;
};
declare function boundingRectOfPolygon(polygon: any): {
    left: number;
    top: number;
    right: number;
    bottom: number;
    width: number;
    height: number;
};
declare function boundingRectOfPolyline(polyline: any): {
    left: number;
    top: number;
    right: number;
    bottom: number;
    width: number;
    height: number;
};
declare function boundingRectOfPath(path: any, shouldReturnTrueBounding: any): {
    top: number;
    bottom: number;
    left: number;
    right: number;
};
declare function boundingRectOfShape(shape: any, needTrueBounding: any): {
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
//# sourceMappingURL=shape_bounding.d.ts.map