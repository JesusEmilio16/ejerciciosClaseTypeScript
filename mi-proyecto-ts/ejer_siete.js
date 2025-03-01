var a = [1, 2, 3, 4, 5];
var mayor = 0;
function numeroMayor(a) {
    for (var i = 0; i < a.length; i++) {
        if (mayor < a[i]) {
            mayor = a[i];
        }
    }
    return mayor;
}
console.log(numeroMayor(a));
