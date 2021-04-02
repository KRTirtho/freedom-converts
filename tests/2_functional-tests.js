const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function () {
  test('Basic operation', (done) => {
    chai.request(server)
      .get("/api/convert?input=1kg")
      .end((_, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.returnNum, 2.20462);
        assert.equal(res.body.returnUnit, "lbs");
        assert.equal(res.body.string, "1 kilograms converts to 2.20462 pounds")
        done();
      })
  })
  test('Invalid Operation', (done) => {
    chai.request(server)
      .get("/api/convert?input=1fm")
      .end((_, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body, "invalid unit");
        done();
      })
  })
  test('Without Number', (done) => {
    chai.request(server)
      .get("/api/convert?input=L")
      .end((_, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.returnNum, 0.26417);
        assert.equal(res.body.returnUnit, "gal");
        assert.equal(res.body.string, "1 liters converts to 0.26417 gallons")
        done();
      })
  })

  test('Mathematical divide in query', (done) => {
    chai.request(server)
      .get("/api/convert?input=3/2lbs")
      .end((_, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.returnNum, 0.68039);
        assert.equal(res.body.returnUnit, "kg");
        assert.equal(res.body.string, "1.5 pounds converts to 0.68039 kilograms")
        done();
      })
  })


});
