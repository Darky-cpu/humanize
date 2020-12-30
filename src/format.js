function humanize(ms, option) {
  if (ms && "number" !== typeof ms) {
    throw new TypeError("First argument must be number");
    return;
  }
  if (option && "object" !== typeof option) {
    throw new TypeError("Option argument must be object");
    return;
  }
  
  const format = /[//A-z(#&$!.):?+,\-*]/i;
  
  if (format.test(ms.toString())) {
    throw new TypeError("First argument must be number");
    return;
  }
  
  var Milis = parseInt(ms);
  var seconds = 0;
  var minutes = 0;
  var hours = 0;
  var days = 0;
  var weeks = 0;
  var months = 0;
  var years = 0;
  
  seconds = Math.floor(ms / 1000 % 60);
  minutes = Math.floor(ms / (1000 * 60) % 60);
  hours = Math.floor(ms / (1000 * 60 * 60) % 24);
  days = Math.floor(ms / (1000 * 60 * 60 * 24) % 30);
  weeks = Math.floor(ms / (1000 * 60 * 60 * 24 * 7) % 4.29);
  months = Math.floor(ms / (1000 * 60 * 60 * 24 * 30) % 12);
  years = Math.floor(ms / (1000 * 60 * 60 * 24 * 30 * 12));
  
  var times = [];
  
  if (seconds > 0) times.push(`${seconds} seconds`);
  if (minutes > 0) times.push(`${minutes} minutes`);
  if (hours > 0) times.push(`${hours} hours`);
  if (days > 0) times.push(`${days} days`);
  if (weeks > 0) times.push(`${weeks} weeks`);
  if (months > 0) times.push(`${months} months`);
  if (years > 0) times.push(`${years} years`);
  
  return times.join(", ");
}

module.exports = humanize;
