let valor: number=3;
function parImpar(a:number): string{

    if(a%2==0){
        return "par";
    }else{
        return "impar"
    }
}
console.log(parImpar(valor))

let parimpar:string = valor % 2 ===0? "par":"impar"
console.log(`el numero ${valor} es ${parimpar}`)
