export default imageBounding;
/**
 * Bounding rectangle for <image>. This method doesn't check
 * <clipPath> or <mask>. It calculates bounding rectangle of
 * <image> tag itself.
 */
declare function imageBounding(image: any): {
    left: number;
    right: number;
    top: number;
    bottom: number;
    width: number;
    height: number;
};
//# sourceMappingURL=image_bounding.d.ts.map