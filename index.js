//RESUELVE LOS EJERCICIOS AQUÍ
/* - [ ] 1.- Dado el objeto **empleados**, extrae la empleada Ana completa.
```
``` */
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];
let ana ={};
//const [, Ana] = empleados
ana.name = empleados[1].name;
ana.email = empleados[1].email;

//2
let emailLuis = empleados[0].email;
console.log(emailLuis);

/* 3 - [ ] 3.- Usa destructuración para cambiar los valores de a y b;

```
// Inicialmente


// Al final
let a = 3;
let b = 5;
```*/
let a = 5;
let b = 3;

[a,b] = [3,5];

/* - [ ] 4.- Dado el objeto **HIGH_TEMPERATURES**
```


```

Cambiar las siguientes líneas para guardar mediante destructuración los valores de 
temperaturas en las variables maximaHoy y maximaManana

```

console.log(maximaHoy);
console.log(maximaManana);

``` */

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};

const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;



/* - [ ] 5.- Escribe una función llamada **sumEveryOther** que pueda recibir cualquier cantidad de números y 
devuelva la suma de todos los demás argumentos.
```
sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26
```*/
function sumEveryOther(...n) {
return n.reduce((a,b)=> a+b,0);

}
console.log(sumEveryOther(11, 3, 12));

/* - [ ] 6.- Escribe una función llamada **addOnlyNums** que pueda recibir cualquier número de argumentos 
(incluyendo números y strings y retorne la suma solo de los números).
```
addOnlyNums(1, "perro", 2, 4); //7
```*/
function addOnlyNums(...m) {
    // return m.filter(m = Number).reduce((a,b)=> a+b,0);
    return m
    .filter(elem => typeof elem === 'number')
    .reduce((a,b)=> a+b,0);
}
console.log(addOnlyNums(1, "perro", 2, 4));

/* - [ ] 7.- Escribe una función llamada **countTheArgs** que pueda 
recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

```
countTheArgs("gato", "perro"); //2
countTheArgs("gato", "perro", "pollo", "oso"); //4

``` */
function countTheArgs(...arg){
    return arg.length;
}
console.log(countTheArgs("gato", "perro", "pollo", "oso"));

/*- [ ] 8.- Escribe una función llamada **combineTwoArrays** que reciba dos array cómo argumentos 
y devuelva solo un array que combine los dos (usando spread operator). */
function combineTwoArrays(arr1,arr2){
    return [...arr1,...arr2];
    //
}
console.log(combineTwoArrays([0,1],[0,2]));

/* - [ ] 9.- Escriba una función llamada onlyUniques que acepte cualquier 
número de argumentos y devuelva un array de elementos únicos, sin repetidos.
 ```
 onlyUniques("gato", "pollo", "cerdo", "cerdo"); //["gato", "pollo", "cerdo"]
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]
```
*/
function onlyUniques(...args){
    let uniques=[];
     args.forEach((elemento) =>{
        if(!uniques.includes(elemento)){
          uniques = [...uniques,elemento] //sustituye el push
            // uniques.push(elemento);
        };

    });
    return uniques;
}
console.log(onlyUniques(1,2,3,1,1,2));

/* - [ ] 10.- Escriba una función llamada **combineAllArrays** que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.

```
combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]); // [3, 6, 7, 8, 2, 7, 3, 1]
combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]
``` */
function combineAllArrays(...arrays){
    let res10 = [];
 arrays.forEach((array_item) => {
    //res10 = res10.concat(element0)
    res10 = [...res10,...array_item]; // hace lo mismo que el concat
    
    });
    return res10;
}
console.log(combineAllArrays([1],[2],[0]))//deberia salir [1,2,0]

/* - [ ] 11.- Escriba una función llamada **sumAndSquare** que reciba cualquier 
número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados. */

function sumAndSquare(...z){
    return z.map((argu) => argu**2).reduce((a,b) => (a+b),0);
}
console.log(sumAndSquare(2,2,1,1));