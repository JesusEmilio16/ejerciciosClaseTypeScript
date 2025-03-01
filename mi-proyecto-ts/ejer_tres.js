var nombres = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
console.log("foreach");
nombres.forEach(function (element) {
    console.log(element);
});
console.log("for of");
for (var _i = 0, nombres_1 = nombres; _i < nombres_1.length; _i++) {
    var element = nombres_1[_i];
}
console.log("for tradicional");
for (var i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
