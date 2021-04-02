const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function () {
  test('Convert a valid input', (done) => {
    chai.request(server)
      .get("/api/convert?input=10L")
      .end((_, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.returnNum, 2.64172);
        assert.equal(res.body.returnUnit, "gal");
        assert.equal(res.body.string, "10 liters converts to 2.64172 gallons")
        done();
      })
  })
  test('Convert an invalid input', (done) => {
    chai.request(server)
      .get("/api/convert?input=32g")
      .end((_, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body, "invalid unit");
        done();
      })
  })
  test('Convert an invalid number', (done) => {
    chai.request(server)
      .get("/api/convert?input=3/7.2/4kg")
      .end((_, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body, "invalid number");
        done();
      })
  })

  test('Convert an invalid number AND unit', (done) => {
    chai.request(server)
      .get("/api/convert?input=3/7.2/4kilomegagram")
      .end((_, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body, "invalid number and unit");
        done();
      })
  })

  test('Convert with no number', (done) => {
    chai.request(server)
      .get("/api/convert?input=kg")
      .end((_, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.returnNum, 2.20462);
        assert.equal(res.body.returnUnit, "lbs");
        assert.equal(res.body.string, "1 kilograms converts to 2.20462 pounds")
        done();
      })
  })



});
