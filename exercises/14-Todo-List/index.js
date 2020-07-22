// Your code here
let añadir = document.querySelector("#addToDo"); //obtendremos el primer elemento del documento de el input "addToDo"
let lista = document.querySelector("ul"); //obtendremos el primer elemento del documento de la lista no ordenada "ul"

añadir.addEventListener("keydown", event => {
	if (event.key == "Enter") {
		// si "keydown (tecla oprimida) es igual a la tecla enter actuan las siguientes variables"

		let newLi = document.createElement("li"); //vamos creando lo mismo del HTML una nueva lista
		let newspan = document.createElement("span"); // creamos otro span
		let newI = document.createElement("i"); // creamos otro elemento I
		let newAñadir = document.createTextNode(" " + añadir.value); // en "addToDo del HTML creamos un nuevo nodo con el valor escrito en el input"

		newI.classList.add("fa"); // adentro del I en la class añadimos a fa https://developer.mozilla.org/es/docs/Web/API/DOMTokenList/add lectura del .add
		newI.classList.add("fa-trash"); // aqui terminamos de añadir el icono de la basura

		newLi.appendChild(newspan); // Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado. https://developer.mozilla.org/es/docs/Web/API/Node/appendChild

		newspan.appendChild(newI); // complementando con el span se pone el icono
		newLi.appendChild(newAñadir); // con esto podemos añadir el texto
		lista.appendChild(newLi); // aqui aparece el punto negro
		event.target.value = ""; // event.target se refiere cuando se clickea el elemento <li>
	}

});

