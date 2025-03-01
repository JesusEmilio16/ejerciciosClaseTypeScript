let a :number[]=[1,2,3,4,5]
let mayor: number= 0;

function numeroMayor(a: number[]): number{
    for(let i =0; i<a.length;i++){
        if(mayor<a[i]){
            mayor=a[i]
        }
    }
    return mayor
}
console.log(numeroMayor(a))
