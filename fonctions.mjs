function sum(a, b) {
    console.log(`Somme de ${a} + ${b}`);
    return a + b;
}

const result = sum(10, 20);


const soustraction = function(a, b) {
    return a - b;
} 


const multiplication = (a, b) => a * b; // return a * b


const division = (a, b) => { 
    // faire plein de choses
   return a / b; 
}


/********************************************** */

/**
 * 
 * @param {string} str 
 * @param {callback} doStuff 
 * 
 */
function upperText(str, doStuff) {
    const upper = str.toUpperCase();
    doStuff(upper, str);
}


upperText('coucou', function(toto) {
    console.log('Dans le callback')
    console.log('Ma chaine en majuscules : ' + toto)
})


upperText('Hello World', (upper) => console.log(upper) );


/****** Tableaux *******/


const fruits = ['Pommes', 'Poires', 'Fraises'];

console.log( fruits[0] ); // Pommes

console.log(`Il y a ${fruits.length} fruits dans mon tableau`);

fruits.push('Rhubarbe');


console.log(fruits);



const index = fruits.indexOf('Poires'); // 1
// Si pas de Poires : -1


fruits.splice(index, 1); // Supprime 1 élément à l'index passé



// Pour répéter une action un nombre connu de fois
for(let i = 0; i < fruits.length; i++ ) {
    console.log( fruits[i] )
}


for(let f of fruits) {
    console.log(f);
    f = 'test'; // Ne modifie pas le tableau
}


// Dans toutes les callbacks de tableau : paramètre : élément, index, tableau
fruits.forEach(function(f, index) {
    console.log(`Index ${index}   -> ${f}`);
})


fruits.forEach((fruit) => console.log(fruit));


const upper_fruits =  fruits.map((f) => f.toUpperCase());


const filtered_fruits = fruits.filter((f) => f.charAt(0) === 'P' );






