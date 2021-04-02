const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function () {
  test('Converts any number simply', () => {
    const converted = convertHandler.convert(2.5, "kg");
    assert.equal(converted.returnNum, 5.51156, "The correct returned number");
    assert.equal(converted.returnUnit, "lbs", "Oh, has kg=>lbs");
  })
  test('Get Num', () => {
    assert.equal(convertHandler.getNum("34kg"), 34)
  })
  test('Get Unit', () => {
    assert.equal(convertHandler.getUnit("34kg"), "kg")
  })
  test('Swap Units', () => {
    assert.equal(convertHandler.getReturnUnit("L"), "gal")
  })
  test('Enlarge Units', () => {
    assert.equal(convertHandler.spellOutUnit("mi"), "miles")
  })
  test('Detects wrong unit', () => {
    assert.equal(convertHandler.convert(34, "px").returnUnit, "invalid unit")
  })
  
});