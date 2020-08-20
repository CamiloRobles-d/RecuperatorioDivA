/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let peso;
	let sexo;
	let edad;
	let contadorMasculino = 0;
	let contadorFemenino = 0;
	let promedio;
	let acumuladorEdad = 0;
	let mayorPeso;
	
	for( let i = 0; i < 5; i++){

		nombre = prompt("Ingrese nombre: ");
		while(nombre == "" || !isNaN(nombre)){
			nombre = prompt("nombre incorrecto");
		}

		peso = parseFloat(prompt("ingrese peso: "));
		while(isNaN(peso) || peso < 0){
			peso = parseFloat(prompt("Error"));
		}

		sexo = prompt("Ingrese sexo");
		while( sexo != 'f' && sexo != 'm'){
			sexo = prompt("invalido ingrese sexo");
		}

		edad = parseInt(prompt("ingrese edad:"));
		while( isNaN(edad) || edad <= 0 || edad > 120){
			edad = parseInt(prompt("edad inválida, ingrese edad"));
		}

		if (sexo == 'm') {
			contadorMasculino++;

			if( contadorMasculino == 1 || peso > mayorPeso ){
				mayorPeso = peso;
			}
		}
		else {
			contadorFemenino++;
		}

		acumuladorEdad = acumuladorEdad + edad;
	}

	promedio = acumuladorEdad / 5;


	if(contadorFemenino == 0){
		console.log("No so ingresaron datos de mujeres.")
	}
	else{
	console.log("A) La cantidad total de mujeres es: " + contadorFemenino);
	}	

	console.log("B) La edad promedio es de: " + promedio);

	if(contadorMasculino == 0){
		console.log("No se ingresaron datos de Hombres.");
	}
	else{
	console.log("C) El hombre con mayor peso, pesaba " + mayorPeso + "kg.");
	}
}
