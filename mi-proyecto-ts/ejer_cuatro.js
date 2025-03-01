var valor = 3;
function parImpar(a) {
    if (a % 2 == 0) {
        return "par";
    }
    else {
        return "impar";
    }
}
console.log(parImpar(valor));
var parimpar = valor % 2 === 0 ? "par" : "impar;";
console.log("el numero ".concat(valor, " es ").concat(parimpar));
