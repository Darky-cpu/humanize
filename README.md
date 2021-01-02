# Installation

`npm i time-humanize`

# Usage

```js
const { format } = require('time-humanize');

const time = format(ms, options);
```

# Examples

```js
const { format } = require('time-humanize');
const time = format(1000);

console.log(time); // 1 second
```

```js
const time = format(86399999);

console.log(time); // 23 hours, 59 minutes, 59.99 seconds
```

## Options

```js
const time = format(86399999, { digits: 3 });

console.log(time); // 23 hours, 59 minutes, 59.999 seconds
```

```js
const time = format(86399999, {
  lang: "en",
  round: true
});

console.log(time); // 23 hours, 59 minutes, 59 seconds
```

```js
const time = format(86399999, {
  lang: "ar",
  units: ["h", "m"]
});

console.log(time); // ثواني 59, ساعات 23
```