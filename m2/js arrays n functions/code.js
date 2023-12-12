function printNumbers(){
    n = parseInt(document.getElementById("input").value);
    array = [];

    for (i = 1; i<=n; i++){
        array[i-1] = i;
    }
    document.getElementById("output").innerHTML=String(array);
}