let nombres: string[]=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]
console.log("foreach")
nombres.forEach(element => {
    console.log(element)
});
console.log("for of")
for (const element of nombres) {

}
console.log("for tradicional")
for(let i =0;i<nombres.length;i++){
    console.log(nombres[i])
}
