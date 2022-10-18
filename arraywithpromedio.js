array=[85,74,89,65,24,32]
acum=0

for(i=0; i<array.length;++i){
    acum+=array[i]
}
console.log(array)
console.log("La sumatoria del vector es: "+acum)
prom=acum/array.length
console.log("El promedio del vector es: "+prom)
var min = Math.min.apply(null, array);
console.log("El número menor del vector es: "+min)
var max = Math.max.apply(null, array);
console.log("El número mayor del vector es: "+max)
