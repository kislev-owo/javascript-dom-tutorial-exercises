let beginning = "<ul>";

let liststring = ``;

let ending = "</ul>";

liststring = `<li>First Item</li>
             <li>Second Item</li>   
             <li>Third Item</li>`; // creamos la variable liststring y adentro                          ponemos las listas una terminando la otra

// do not modify after this line
document.querySelector("#myDiv").innerHTML = beginning + liststring + ending;
