let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here

	let click = document.createElement("li"); // creo una variable en la lista "li"

	click.innerHTML = "Fourth element"; // en el click creare el 4to elemento

	document.querySelector("#myList").appendChild(click); // en el id de mylist creo un hijo con su variable click
});


//pd: no se porque lo crea infinitas veces !!!! cada vez que hago click