/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
let sexo;
let lugar;
let cantidad;
let temporada;
let lugarFavorito;
let contadorBariloche = 0;
let contadorSalta = 0;
let contadorCataratas = 0;
let nombreMaxPasajeros;
let maxPasajeros;
let contadorInvierno = 0
let acumuladorInvierno = 0;
let flag = 0;
let promedio;
let seguir;

do{
    sexo = prompt("Ingrese sexo del titular: ");
	while( sexo != 'f' && sexo != 'm'){
		sexo = prompt("Inválido, ingrese sexo: ");
	}
    
    lugar = prompt('Ingrese un lugar entre nuestra selección de "bariloche", "cataratas" y "salta": ');
	while( lugar != 'bariloche' && lugar != 'cataratas' && lugar != "salta") {
		lugar = prompt("Inválido, ingrese lugar: ");
    }   

    temporada = prompt("Ingrese temporada: ");
	while( temporada != 'verano' && temporada != 'otoño' && temporada != "invierno" && temporada != "primavera") {
		temporada = prompt("invalido ingrese temporada");
    }    
    
    cantidad = parseInt(prompt("Ingrese la cantidad de pasajeros:"));
	while( isNaN(cantidad) || cantidad <= 0 ){
		cantidad = parseInt(prompt("Cantidad inválida, ingrese otra vez la cantidad de pasajeros: "));
    }
    
    if( lugar == "bariloche"){
        contadorBariloche++;
    }
    else if( lugar == "cataratas"){
        contadorCataratas++;
    }
    else{
        contadorSalta++;
    }
   
    if(flag == 0 || cantidad > maxPasajeros){
        maxPasajeros = cantidad;
        sexoMaxPasajeros = sexo;
        flag = 1;
    }

    if(temporada == "invierno"){
        contadorInvierno++;
        acumuladorInvierno += cantidad;
    }

    seguir = prompt("quiere ingresar otro viaje?: ");
}while(seguir == 's');

if( contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta){
    lugarFavorito = "Bariloche";
}
else if( contadorCataratas > contadorBariloche && contadorCataratas > contadorSalta){
    lugarFavorito = "Cataratas";
}
else{
    lugarFavorito = "Salta";
}

if(contadorInvierno != 0){
    promedio = acumuladorInvierno / contadorInvierno;
}

console.log("A) El lugar más elegido: " + lugarFavorito);
console.log("B) El sexo del titular que lleva más pasajeros es " + sexoMaxPasajeros + " con " + maxPasajeros + " pasajeros");

if(contadorInvierno == 0){
	console.log("C) No hubo viajes en invierno.")
}
else{
console.log("C) El promedio de personas por viaje que viajan en invierno es " + promedio);
}

}
