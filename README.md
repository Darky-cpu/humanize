# Installation

`npm i time-humanize`

# Usage

```javascript
const { format } = require('time-humanize');

const time = format(ms, options);
```

# Example

```javascript
const { format } = require('time-humanize');
const time = format(1000);

console.log(time); // 1 seconds
```

```javascript
const time = format(86399999);

console.log(time); // 23 hours, 59 minutes, 59 seconds
```