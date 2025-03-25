d = parseInt(prompt("Please, enter the length of your hole"));
e = parseInt(prompt("Please, enter the width of your hole"));

a = 10;
b = 6;
c = 3;

if ((a <= e && c <= d) || (b <= d && a <= e) || (c <= e && a <= d)
    || (c <= d && b <= e) || (b <= d && c <= e) || (a <= d && b <= e)) {
    document.write("<h3>The brick fits your hole</h3>");
}
else {document.write("<h3>The brick doesn't fit your hole</h3>");}