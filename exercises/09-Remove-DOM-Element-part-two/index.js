let ul = document.querySelector("#parentLI");
//arriba list es ul y #mylist es #parentLI segun el HTML

let hijos = ul.childNodes;
// arriba hijos es solo una variable ul sigue siendo list.childNode
// que es para eliminar

ul.removeChild(hijos[3]);
//arriba elimina el array en la posicion 3 osea la 4ta posicion
//del array lei que en listas cada li toma 2 posiciones 
//para eliminar al 1er elemento [1]
//para eliminar el 2do elemento [3]
//para eliminar el  3r elemento [4]

