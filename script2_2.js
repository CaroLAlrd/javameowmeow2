s = prompt("Enter the amount of money in rubles, please");
sum = s % 10;
before_end = ((s - s % 10) / 10) % 10;
if (sum == 1) {
    document.write(s + " рубль")
}
else if ((sum >= 5 && sum <= 9) || sum == 0 || before_end == 1) {
    document.write(s + " рублей")
}
else {
    document.write(s + " рубля")
}