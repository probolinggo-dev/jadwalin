const intervals = {};
const date = new Date();
let ticker;
const startTicker = () => {
  ticker = setInterval(() => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const time = `${hour}:${minute}`;

    if (intervals[time]) {
      intervals[time]();
    }
  }, 60000);
};

// Make sure we start the clock precisely ON the 0th millisecond
setTimeout(() => {
  startTicker();
}, Math.ceil((+date / 1000) * 1000 - +date));

const jadwalin = (callback = null) => {
  this.callback = callback;
  return {
    destroy: () => clearInterval(ticker),
    setiap: (time) => {
      if (typeof time !== 'string')
        throw new Error('time should be string with format hh:mm');

      const splittedTime = time.split(':');
      const hour = parseInt(splittedTime[0]);
      const minute = parseInt(splittedTime[1]);

      if (isNaN(hour) || isNaN(minute))
        throw new Error('time should be string with format hh:mm');

      const normalizedTime = `${hour}:${minute}`;
      intervals[normalizedTime] = this.callback;
    }
  };
};

module.exports = jadwalin;
