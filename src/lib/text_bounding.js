import Helper from "../util/helper";
import Matrix from "../util/matrix";
import ElementObject from "./element_object";

function getUnicodeLength(str) {
  var length = 0;
  if (!str) return 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "%") length += 2;
    else length += str.charCodeAt(i) > 255 ? 2 : 1;
  }
  return length;
}

function textBoundingBox(text) {
  var textObj = ElementObject(text);
  if (!textObj) return null;

  var bounding;
  if (textObj.children.length > 0) bounding = multiLineTextBoundingBox(textObj);
  else bounding = singleLineTextBoundingBox(textObj);
  return bounding;
}

function singleLineTextBoundingBox(textObj) {
  var x = 0;
  var y = 0;
  var fontSize = parseFloat(textObj["font-size"]);
  var letterSpacing = textObj["letter-spacing"];
  var unicodeLength = getUnicodeLength(textObj.text);
  var matrix;
  if (textObj.transform) {
    matrix = Helper.transformToMatrix(textObj.transform.trim());
    x = matrix.e(1, 3);
    y = matrix.e(2, 3);
  }
  if (typeof textObj.x === "number") x = textObj.x;
  if (typeof textObj.y === "number") y = textObj.y;

  // By setting y value of an text object to Math.round(0.8808*fontSize - 0.3333)
  // it just snaps to the top of the SVG wrapper
  // The formula comes from curve fitting tool in Matlab
  // https://img.alicdn.com/tps/TB1CJu.PpXXXXXcaXXXXXXXXXXX-2053-1236.jpg
  var result = {
    top: y - Math.round(0.8808 * fontSize - 0.3333),
    left: x,
    width: (unicodeLength / 2) * fontSize + (textObj.text.length - 1) * letterSpacing,
    height: fontSize,
  };
  result.right = result.left + result.width;
  result.bottom = result.top + result.height;
  return result;
}

function multiLineTextBoundingBox(textObj) {
  var top = Number.POSITIVE_INFINITY;
  var left = Number.POSITIVE_INFINITY;
  var bottom = Number.NEGATIVE_INFINITY;
  var right = Number.NEGATIVE_INFINITY;
  var matrix = Matrix.identity(3);
  var firstLineFontSize;
  var lastY = Number.POSITIVE_INFINITY;
  if (textObj.transform) {
    matrix = Helper.transformToMatrix(textObj.transform.trim());
  }

  textObj.children.forEach(function (tspanObj) {
    var fontSize = parseFloat((tspanObj["font-size"] || textObj["font-size"]).trim());
    var letterSpacing = tspanObj["letter-spacing"] || textObj["letter-spacing"];
    var unicodeLength = getUnicodeLength(tspanObj.text);
    var w = (unicodeLength / 2) * fontSize + (tspanObj.text.length - 1) * letterSpacing;
    var h = fontSize;
    var t = tspanObj.y;
    var l = tspanObj.x;
    var b = t + h;
    var r = l + w;
    if (t < top) top = t;
    if (l < left) left = l;
    if (b > bottom) bottom = b;
    if (r > right) right = r;
    if (lastY > t) {
      lastY = t;
      firstLineFontSize = fontSize;
    }
  });

  var result = {
    left: matrix.e(1, 1) * left + matrix.e(1, 2) * top + matrix.e(1, 3),
    top: matrix.e(2, 1) * left + matrix.e(2, 2) * top + matrix.e(2, 3) - Math.round(0.8808 * firstLineFontSize - 0.3333),
    right: matrix.e(1, 1) * right + matrix.e(1, 2) * bottom + matrix.e(1, 3),
    bottom: matrix.e(2, 1) * right + matrix.e(2, 2) * bottom + matrix.e(2, 3) - Math.round(0.8808 * firstLineFontSize - 0.3333),
  };
  result.width = result.right - result.left;
  result.height = result.bottom - result.top;
  return result;
}

export default textBoundingBox;
