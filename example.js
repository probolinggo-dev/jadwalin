const jadwalin = require('./');

const task1 = () => {
  const now = new Date();
  console.log(now + ': selamat pagi hayati 1');
};

const task2 = () => {
  const now = new Date();
  console.log(now + ': selamat pagi hayati 2');
};

const scheduler1 = new jadwalin(task1);
const scheduler2 = new jadwalin(task2);

scheduler1.setiap(2000);
scheduler2.setiapJam('3:28');
