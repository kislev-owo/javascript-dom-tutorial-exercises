
window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here

	for (let paises of countries) {
		// inicio con for para crear las opciones

		let opcion = document.createElement("option"); // creamos un nuevo elemento con el del option del html

		let nodo = document.createTextNode(paises); // utilizamos createTextNode para cear un texto con el pais correcto elegido
        
        opcion.value = paises; // lo elegido en la opcion se guarda en los paises

        opcion.appendChild(nodo); // en la opcion creo un hijo con el nodo elegido
        
		document.querySelector("#mySelect").appendChild(opcion); // en el id de myselect se añade la el hijo con su repectiva opcion
	}

	let boton = document.querySelector("button"); // inicio la variable boton con su id de button del html
    boton.removeAttribute("onclick"); // cuando se preciona el boton elimina el tecxto que estaba antes
    
	boton.addEventListener("click", function() { //aqui añade la alerta con su valor diciendo el pais correcto
		alert(document.querySelector("#mySelect").value);
	});
};
