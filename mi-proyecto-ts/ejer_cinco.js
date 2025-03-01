var mayorEdad = 18;
function identificarEdad(edad) {
    if (edad >= mayorEdad) {
        return "es mayor de edad";
    }
    else {
        return "menor edad";
    }
}
console.log(identificarEdad(20));
