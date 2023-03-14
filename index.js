//1
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

const [, ana] = empleados;

//2
const { email: emailLuis } = empleados[0];


//3 TODO

const { a = 5, b = 3 } = { a: 3, b: 5 };


//4

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
}

const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;


//5

function sumEveryOther(...nums) {
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return total;
}


//6 

function addOnlyNums(...arr) {
    const arrayFiltrado = arr.filter(elemento => (typeof elemento === "number"));
    return arrayFiltrado.reduce((a, b) => (a + b));
}


//7 

const countTheArgs = (...i) => i.length;


//8

function combineTwoArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}


//9 

const onlyUniques = (...a) => [...new Set(a)];


//10

function combineAllArrays(...arr) {
    return arr.reduce((a, b) => [...a, ...b]);
}

//11

const sumAndSquare = (...a) => a.map(elemento => elemento * elemento).reduce((a, b) => a + b);