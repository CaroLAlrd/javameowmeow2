day = parseInt(prompt("Entering the date. Please, enter the day (d)"));
mon = parseInt(prompt("Entering the date. Please, enter the month (m)"));
year = parseInt(prompt("Entering the date. Please, enter the year (yyyy)"));

if (year % 4 == 0) {
    if (year % 100 != 0 || year % 400 == 0) {
        leap_year = true;
    }
}
else leap_year = false;

if (mon == 2) {
    if (leap_year) {
        days_in_mon = 29;
    }
    else {days_in_mon = 28}
}
else if (mon == 4 || mon == 6 || mon == 9 || mon == 11) {
    days_in_mon = 30;
}
else {
    days_in_mon = 31;
}

if (day == days_in_mon) {
    n_day = 1;
    n_mon = mon + 1;
    n_year = year;
    if (mon == 12) {
        n_year = year + 1; 
        n_day = n_mon = 1;
    }
}
else {
    n_day = day + 1;
    n_mon = mon;
    n_year = year;
}

document.write(n_day + "." + n_mon + "." + n_year) 
