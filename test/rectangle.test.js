const assert = require('assert');
const Rectangle = require('../Rectangle');
const rectangle = new Rectangle(10, 5);

// give the test suite a label using describe
describe('rectangle', () => {
  // give the test a label using it
  it('should return false', () => {
    assert.strictEqual(rectangle.isSquare(10, 5), false);
  });

  it('should return true', () => {
    assert.strictEqual(rectangle.isSquare(10, 5), false);
  });

  it('should return the area', () => {
    assert.strictEqual(rectangle.getArea(10, 5), 50);
  });

  it('should return the perimeter', () => {
    assert.strictEqual(rectangle.getPerimeter(10, 5), 30);
  });
});