const { ar, en } = require("./test/languages.json");

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
  
  var language = en;
  
  try {
    if (option && option.lang) {
      if (option.lang === "ar") language = ar;
      if (option.lang === "en") language = en;
    }
  } catch (e) {
    throw new TypeError(e);
  }
  
  var round = false;
  var digits = 2;
  var join = ", ";
  var units = [
    "s",
    "m",
    "h",
    "d",
    "w",
    "mo",
    "y"
  ];
  
  try {
    if (option && option.round) {
      round = true;
    }
    if (option && option.digits) {
      digits = parseInt(option.digits);
    }
    if (option && option.join) {
      join = option.join;
    }
    if (option && option.units) {
      if ("object" !== typeof option.units) {
        throw new TypeError("Units option value must be array");
        
        return;
      }
      units = option.units;
    }
  } catch (e) {
    throw new TypeError(e);
  }
  
  var Milis = parseInt(ms);
  var seconds = 0;
  var minutes = 0;
  var hours = 0;
  var days = 0;
  var weeks = 0;
  var months = 0;
  var years = 0;
  
  // Formating
  years = Math.floor(ms / (1000 * 60 * 60 * 24 * 30 * 12));
  months = Math.floor(ms / (1000 * 60 * 60 * 24 * 30) % 12);
  weeks = Math.floor(ms / (1000 * 60 * 60 * 24 * 7) % 4.29);
  days = Math.floor(ms / (1000 * 60 * 60 * 24) % 30);
  hours = Math.floor(ms / (1000 * 60 * 60) % 24);
  minutes = Math.floor(ms / (1000 * 60) % 60);
  
  if (round) {
    
    seconds = Math.floor(ms / 1000 % 60);
    
  } else {
    
    seconds = ms / 1000 % 60;
    
    seconds = seconds.toFixed(digits); 
  }
  var times = [];
  
  if (units.includes("y")) {
    if (years > 0) times.push(`${years} ${(years == 1) ? language.y[0] : language.y[1]}`);
  }
    if (units.includes("mo")) {
  if (months > 0) times.push(`${months} ${(months == 1) ? language.mo[0] : language.mo[1]}`);
  }
    if (units.includes("w")) {
  if (weeks > 0) times.push(`${weeks} ${(weeks == 1) ? language.w[0] : language.w[1]}`);
  }
    if (units.includes("d")) {
  if (days > 0) times.push(`${days} ${(days == 1) ? language.d[0] : language.d[1]}`);
  }
    if (units.includes("h")) {
  if (hours > 0) times.push(`${hours} ${(hours == 1) ? language.h[0] : language.h[1]}`);
  }
    if (units.includes("m")) {
  if (minutes > 0) times.push(`${minutes} ${(minutes == 1) ? language.m[0] : language.m[1]}`);
  }
    if (units.includes("s")) {
  if (seconds > 0) times.push(`${seconds} ${(seconds == 1) ? language.s[0] : language.s[1]}`);
  }
  return times.join(join);
}

if (2 == 2) {
  console.log(humanize(Date.now(), { round: true, join: " & "}));
}

module.exports = humanize;