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
  
  
  years = Math.floor(ms / (1000 * 60 * 60 * 24 * 30 * 12));
  months = Math.floor(ms / (1000 * 60 * 60 * 24 * 30) % 12);
  weeks = Math.floor(ms / (1000 * 60 * 60 * 24 * 7) % 4.29);
  days = Math.floor(ms / (1000 * 60 * 60 * 24) % 30);
  hours = Math.floor(ms / (1000 * 60 * 60) % 24);
  minutes = Math.floor(ms / (1000 * 60) % 60);
  seconds = Math.floor(ms / 1000 % 60);
  
  var times = [];
  
  if (years > 0) times.push(`${years} years`);
  if (months > 0) times.push(`${months} months`);
  if (weeks > 0) times.push(`${weeks} weeks`);
  if (days > 0) times.push(`${days} days`);
  if (hours > 0) times.push(`${hours} hours`);
  if (minutes > 0) times.push(`${minutes} minutes`);
  if (seconds > 0) times.push(`${seconds} seconds`);
  
  return times.join(", ");
}

module.exports = humanize;