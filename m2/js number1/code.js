a = prompt("a = ");
b = prompt("b = ");
c = prompt("c = ");

D = Math.pow(b, 2) - (4 * a * c);
if (D > 0) {
    alert((-b + Math.sqrt(D)) / (2 * a));
    alert((-b - Math.sqrt(D)) / (2 * a));
} else if (D == 0) {
    alert(-b / (2 * a));
} else {
    alert("Нет корней");
}