const mayorEdad: number=18;

function identificarEdad(edad:number):string{
    if(edad>=mayorEdad){
        return"es mayor de edad"
    }else{
        return"menor edad"
    }
}

console.log(identificarEdad(20))
