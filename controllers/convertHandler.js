class ConvertHandler {
  getUnit(input) {
    return input.replace(/\d+|\/|\+|-|\*|\./g, "");
  };

  getReturnUnit(initUnit) {
    switch (initUnit) {
      case "km":
        return "mi";
      case "mi":
        return "km";
      case "gal":
        return "L";
      case "L":
        return "gal";
      case "kg":
        return "lbs";
      case "lbs":
        return "kg";
      default:
        return "invalid unit";
    }
  };

  spellOutUnit(unit) {
    switch (unit) {
      case "km":
        return "kilometers";
      case "mi":
        return "miles";
      case "gal":
        return "gallons";
      case "L":
        return "liters";
      case "kg":
        return "kilograms";
      case "lbs":
        return "pounds";
      default:
        return "invalid unit";
    }
  };
  convert(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const returnUnit = this.getReturnUnit(initUnit);
    let returnNum = initNum;

    switch (initUnit) {
      case "km":
        returnNum /= miToKm;
        break;
      case "mi":
        returnNum *= miToKm;
        break;
      case "gal":
        returnNum *= galToL;
        break;
      case "L":
        returnNum /= galToL;
        break;
      case "lbs":
        returnNum *= lbsToKg;
        break;
      case "kg":
        returnNum /= lbsToKg;
        break;
      default:
        break;
    }

    returnNum = parseFloat((returnNum).toFixed(5))

    return { initNum, initUnit, returnNum, returnUnit, string: this.getString(initNum, this.spellOutUnit(initUnit), returnNum, this.spellOutUnit(returnUnit)) };
  };

  getString(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
  };

  getNum(input) {
    return eval(input.replace(/[a-z]/ig, "") || 1)
  };
}

module.exports = ConvertHandler;
