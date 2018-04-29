# jadwalin
Scheduling task with JavaScript

## Installation
```bash
$ yarn install jadwalin
```

## Usage

```javascript
const jadwalin = require('jadwalin');

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
scheduler2.pada('3:28');
```
