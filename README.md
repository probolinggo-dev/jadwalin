# jadwalin
Scheduling task with JavaScript

## Installation
```bash
$ yarn install jadwalin
```

## Usage

```javascript
const jadwalin = require('jadwalin');
const task = () => console.log('selamat pagi hayati');
jadwalin(task).setiap('07:30');
```
