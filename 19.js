/*
You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

var daysInMonth = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
}

function getDaysInMonth(year, month) {
    var d = daysInMonth[month];
    if (month == 2) {
        if ((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)) {
            d++;
        }
    }
    return d;
}



var sundays = 0;

var day = 1;

for(var y = 1900; y <= 2000; y++) {
    for(var m = 1; m <= 12; m++) {
        if (day % 7 == 0 && y > 1900) {
            sundays++;
        }
        day += getDaysInMonth(y, m);
    }
}

console.log(sundays);