import boundingOfImage from "./lib/image_bounding";
import boundingOfShape from "./lib/shape_bounding";
import boundingOfText from "./lib/text_bounding";
import boundingOfGradient from "./lib/gradient_bounding";

export default {
  line: boundingOfShape.line,
  rect: boundingOfShape.rect,
  circle: boundingOfShape.circle,
  ellipse: boundingOfShape.ellipse,
  polygon: boundingOfShape.polygon,
  polyline: boundingOfShape.polyline,
  path: boundingOfShape.path,
  shape: boundingOfShape.shape,
  image: boundingOfImage,
  text: boundingOfText,
  gradient: boundingOfGradient,
};
