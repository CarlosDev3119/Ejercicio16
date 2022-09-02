import { Rectangle } from "./classes/figuras";

test('return reactangle area', () => {

    let rectangle = new Rectangle(2, 7);

    expect(rectangle.getArea()).toBe(14);
})