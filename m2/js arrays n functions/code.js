function printNumbers(){
    n = parseInt(document.getElementById("input").innerHTML);
    array = [];

    for (i = 1; i<=n; i++){
        array[i-1] = i;
    }
    console.log(String(array))
    document.getElementById("output").innerHTML=String(array);
}