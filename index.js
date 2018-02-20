const intervals = {};
const ticker = setInterval(() => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const time = `${hour}:${minute}`;

  if (intervals[time]) {
    intervals[time]();
  }
}, 40000);

const jadwalin = (callback) => {
  this.callback = callback;
  return {
    setiap: (time) => {
      intervals[time] = this.callback;
    }
  }
}

module.exports = jadwalin;
