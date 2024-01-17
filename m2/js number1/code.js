function main(){
    a = parseInt(document.getElementById("a").value);
    b = parseInt(document.getElementById("b").value);
    c = parseInt(document.getElementById("c").value);
    
    D = Math.pow(b, 2) - (4 * a * c);
    if (D > 0) {
        alert((-b + Math.sqrt(D)) / (2 * a));
        alert((-b - Math.sqrt(D)) / (2 * a));
    } else if (D == 0) {
        alert(-b / (2 * a));
    } else {
        alert("Нет корней");
    }
}