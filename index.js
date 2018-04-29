
function jadwalin(callback = null) {
  this.ticker = null;
  this.callback = callback;
  this.hour = null;
  this.minute = null;
  this.isInterval = false;
  
  this.initTicker = (msInterval = 60000) => {
    if (this.ticker !== null) {
      clearInterval(this.ticker);
    }
    
    const initDate = new Date();
    // Make sure we start the clock precisely ON the 0th millisecond
    setTimeout(() => {
      this.startTicker(msInterval);
    }, Math.ceil((+initDate / 1000) * 1000 - +initDate));
  };

  this.startTicker = (msInterval) => {
    this.ticker = setInterval(() => {
      const date = new Date();
      const hour = date.getHours();
      const minute = date.getMinutes();
  
      if (this.hour === hour && this.minute === minute) {
        this.callback();
      }

      if (this.isInterval) {
        this.callback();
      }
    }, msInterval);
  };

  return {
    destroy: () => clearInterval(this.ticker),
    pada: (time) => {
      if (this.isInterval)
        throw new Error('pada() function cannot be used in conjunction with setiap() function');

      if (typeof time !== 'string')
        throw new Error('time should be string with format hh:mm');

      const splittedTime = time.split(':');
      const hour = parseInt(splittedTime[0]);
      const minute = parseInt(splittedTime[1]);
        
      if (isNaN(hour) || isNaN(minute))
        throw new Error('time should be string with format hh:mm');
        
      this.hour = hour;
      this.minute = minute;
      this.initTicker();
    },
    setiap: (ms) => {
      if (this.hour || this.minute)
        throw new Error('setiap() function cannot be used in conjunction with pada() function');

      if (typeof ms !== 'number')
        throw new Error('arg should be a number in milisecond');

      this.isInterval = true;
      this.initTicker(ms);
    }
  };
};

module.exports = jadwalin;
