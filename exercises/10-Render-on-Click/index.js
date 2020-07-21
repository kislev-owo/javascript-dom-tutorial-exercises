let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here

	let ejercicio = document.createElement("div"); // creo variable ejercicio con un "div" en createElement

	ejercicio.innerHTML = "Hello World"; // el HTML dira solo hello world

	ejercicio.style.background = "yellow"; // aqui controlo el css de la string

	document.body.appendChild(ejercicio); // aqui creo el body con el hijo
});
