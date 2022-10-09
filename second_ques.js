let time = "11:30:30PM";

let hrs = parseInt(time.substr(0, 2));
let mins = parseInt(time.substr(3, 2));
let secs = parseInt(time.substr(6, 2));
let dec = time.substr(8, 2);
let addMin = 45;
let addHours = 0;

if (secs + 45 < 60) secs = secs + 45;
else {
  secs = 45 - (60 - secs);
  addMin++;
}

if (mins + addMin < 60) mins = mins + addMin;
else {
  mins = addMin - (60 - mins);
  addHours++;
}

if (dec === "AM") {
  if (hrs === 12) hrs = addHours;
  else {
    hrs = hrs + addHours;
    if (hrs == 12) dec = "PM";
  }
} else {
  if (hrs != 12) {
    if (hrs === 11 && addHours) {
      hrs = 0;
      dec = "AM";
    } else hrs = hrs + 12 + addHours;
  } else hrs = hrs + addHours;
}

let finalHrs = "";
let finalMins = "";
let finalSecs = "";

if (hrs < 10) finalHrs = "0" + hrs.toString();
else finalHrs = hrs.toString();
if (mins < 10) finalMins = "0" + mins.toString();
else finalMins = mins.toString();
if (secs < 10) finalSecs = "0" + secs.toString();
else finalSecs = secs.toString();

let ans = finalHrs + ":" + finalMins + ":" + finalSecs + dec;
console.log(ans);
