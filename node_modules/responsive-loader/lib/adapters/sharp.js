"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sharp = require("sharp");
class SharpAdapter {
    constructor(imagePath) {
        this.image = sharp(imagePath);
    }
    metadata() {
        return this.image.metadata();
    }
    resize({ width, mime, options }) {
        return new Promise((resolve, reject) => {
            let resized = this.image.clone().resize(width, null);
            if (!options.rotate) {
                // .toBuffer() strips EXIF metadata like orientation, so portrait
                // images will become landscape. This updates the image to reflect
                // the EXIF metadata (if an EXIF orientation is set; otherwise unchanged).
                resized.rotate();
            }
            if (options.background) {
                resized = resized.flatten({
                    background: options.background,
                });
            }
            if (mime === 'image/jpeg') {
                resized = resized.jpeg({
                    quality: options.quality,
                    progressive: options.progressive,
                });
            }
            if (mime === 'image/webp') {
                resized = resized.webp({
                    quality: options.quality,
                });
            }
            if (mime === 'image/avif') {
                // @ts-ignore
                resized = resized.avif({
                    quality: options.quality,
                });
            }
            // rotate
            if (options.rotate && options.rotate !== 0) {
                resized = resized.rotate(options.rotate);
            }
            resized.toBuffer((err, data, { height }) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve({
                        data,
                        width,
                        height,
                    });
                }
            });
        });
    }
}
// export default SharpAdapter
module.exports = (imagePath) => {
    return new SharpAdapter(imagePath);
};
