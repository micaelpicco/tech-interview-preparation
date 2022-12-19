function clockMinuteAdder(time, minutesToAdd) {
  // Your code here:
  let hour = Number(time.slice(0, 2));
  let minutes = Number(time.slice(3, 5));
  let allMinuts = hour * 60 + minutes + minutesToAdd;
  hour = Math.floor(allMinuts / 60);
  minutes = allMinuts % 60;
  if (hour >= 24) hour = hour % 24;
  if (hour > 12) hour = hour % 12;
  if (hour < 10) hour = '0' + hour;
  if (minutes < 10) minutes = '0' + minutes;

  return `${hour}:${minutes}`;
}

console.log(clockMinuteAdder('09:00', 20));
console.log(clockMinuteAdder('01:30', 30));
console.log(clockMinuteAdder('12:05', 100));
console.log(clockMinuteAdder('06:30', 90));
console.log(clockMinuteAdder('12:05', 1440));

module.exports = clockMinuteAdder;
