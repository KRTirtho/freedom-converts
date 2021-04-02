'use strict';
const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  let convertHandler = new ConvertHandler();

  app.get("/api/convert", ({ query: { input } }, res) => {
    const result = convertHandler.convert(convertHandler.getNum(input), convertHandler.getUnit(input));
    res.json(result.returnUnit !== "invalid unit" ? result : result.returnUnit)
  })

};
