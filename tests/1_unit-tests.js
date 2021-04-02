const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function () {
  // num
  test('should correctly read a whole number input', () => {
    assert.equal(convertHandler.getNum("21kg"), 21)
  })
  test('should correctly read a decimal number input', () => {
    assert.equal(convertHandler.getNum("3.4kg"), 3.4)
  })
  test('should correctly read a fractional input', () => {
    assert.equal(convertHandler.getNum("3/4kg"), 0.75)
  })
  test('should correctly read a fractional input with a decimal', () => {
    assert.equal(convertHandler.getNum("1/0.5gal"), 2)
  })
  test('should correctly return an error on a double-fraction', () => {
    assert.equal(convertHandler.getNum("1/0.5/3gal"), "invalid number")
  })
  test('should correctly default to a numerical input of 1 when no numerical input is provided', () => {
    assert.equal(convertHandler.getNum("mi"), 1)
  })
  // unit
  test('should should correctly read each valid input unit', () => {
    assert.equal(convertHandler.getUnit("32kg"), "kg");
  })
  test('should correctly return an error for an invalid input unit', () => {
    assert.equal(convertHandler.getUnit("32in"), "invalid unit");
  })
  // return unit
  test('should return the correct return unit for each valid input unit', () => {
    assert.equal(convertHandler.getReturnUnit("km"), "mi");
  })
  // spell unit
  test('should correctly return the spelled-out string unit for each valid input unit', () => {
    assert.equal(convertHandler.spellOutUnit("mi"), "miles");
  })
  // return unit #each
  test('should correctly convert gal to L', () => {
    assert.equal(convertHandler.getReturnUnit("gal"), "L");
  })
  test('should correctly convert gal to L', () => {
    assert.equal(convertHandler.getReturnUnit("gal"), "L");
  })
  test('should correctly convert L to gal', () => {
    assert.equal(convertHandler.getReturnUnit("L"), "gal");
  })
  test('should correctly convert mi to km', () => {
    assert.equal(convertHandler.getReturnUnit("mi"), "km");
  })
  test('should correctly convert km to mi', () => {
    assert.equal(convertHandler.getReturnUnit("km"), "mi");
  })
  test('should correctly convert lbs to kg', () => {
    assert.equal(convertHandler.getReturnUnit("lbs"), "kg");
  })
  test('should correctly convert kg to lbs', () => {
    assert.equal(convertHandler.getReturnUnit("kg"), "lbs");
  })
});