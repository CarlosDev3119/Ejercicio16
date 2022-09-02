"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const figuras_1 = require("./classes/figuras");
test('return reactangle area', () => {
    let rectangle = new figuras_1.Rectangle(2, 7);
    expect(rectangle.getArea()).toBe(14);
});
