const jadwalin = require('../');
const should = require('should');

let result;
const task = () => {
  result = 1;
  return true;
};

describe('Interval', () => {
  it('it should run at right time', (done) => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes() + 1;
    jadwalin(task).setiap(`${hour}:${minute}`);
    setTimeout(() => {
      should(result).be.equal(1);
      done();
    }, 60000);
  }).timeout(70000);
});
