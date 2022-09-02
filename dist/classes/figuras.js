"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Figure {
    constructor() {
        this.width = 0;
        this.height = 0;
    }
    getArea() {
        return this.width * this.height;
    }
}
class Rectangle extends Figure {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
}
exports.Rectangle = Rectangle;
