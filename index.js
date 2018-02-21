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
}

// Make sure we start the clock precisely ON the 0th millisecond
setTimeout(() => {
  startTicker();
}, Math.ceil((+date / 1000) * 1000 - +date))

const jadwalin = (callback) => {
  this.callback = callback;
  return {
    setiap: (time) => {
      intervals[time] = this.callback;
    }
  }
}

module.exports = jadwalin;
