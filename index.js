var deprecated = 'Ne pas utiliser !';


// Ecmascript 6 ou 2015 ->  ES6
// 2021 -> ES12
let a = 'Hello World';

console.log('Je suis un message dans la console !');

console.log('a'); // Affiche 'a'
console.log(a); // affiche 'Hello World'



// Un commentaire sur 1 ligne

/*
Un commentaire
sur plusieurs lignes
*/

/*
- Les noms de variables commencent par une minuscule
- Elles peuvent être écrites en camelCase  ou snake_case
    -> Attention, le kebab-case ne fonctionne pas

Chaque instruction se termine par un ;
-> Il n'y aura aucune erreur si on oublie le point-virgule
-> le point virgule est fortement recommendé mais pas obligatoire
*/


// Déclarer une variable
let b;
// Valeur par défaut : undefined

// Initialiser une variable
let c = 'Coucou';


// Réassigner une valeur
c = 'Nouvelle valeur';

console.log(c); // Nouvelle valeur


const d = 'Je suis une constante';
// les constantes doivent être initialisées dès la déclaration, mais ne peuvent pas être réassignées.


/*
Type de données : 

primitives:
- chaînes de caractères ou string
- numbers
- booleans
- null, undefined, (empty string)


structures: 
- tableaux ou Arrays
- objets
...

*/


c = undefined;
console.log(c);

// Pour échapper : \ (alt-gr 8 )
c = 'String en simple quotes : c\'est moins pratique pour les apostrophes, mais ok pour les "guillements"';
c = "String en double quotes : c'est pratique pour les apostrophes, moins pour les \"guillemets\"";
c = `Templates litteral ( alt-gr + 7 +  7) : c'est nickel pour les apostrophes et les "guillements"`;

const nom = 'Toto';
const message = 'Bonjour';

const salutations = message + ' ' + nom + ', comment ça va ?';
const salutation2 = `Avec template litterals, on peut interpréter du js, exemple 1 + 1 = ${1 + 1}.
Les sauts de ligne sont pris en compte.
${message} ${nom}, ça va ?`;

console.log(salutation2);


// Opérateurs : + - * / %
let numb = 10;
numb = 5 + 5 * 2; // respecte les règles de calcul : 15
numb = (5 + 5) * 2; // 20

let n1 = 10;
let n2 = 5;

numb = n1 / n2; // 2

numb = 10;
let rest = numb % 5; // 0 -> numb est un multiple de 5


numb = 10;
numb = numb + 1;

// Incrémentation
numb++;
++numb;

numb = 10;
console.log( numb++ ); // 10 -> d'abord l'affichage puis l'incrémentation
console.log( numb ); // 11
console.log( ++numb ); // 12  -> d'abord l'incrémentation puis l'affichage
console.log(numb); // 12

// Décrémentation
numb--;
--numb;

numb = numb + 2;
numb += 2;
numb -= 2;
numb *= 2;
numb /= 2;
numb %= 2;

let piege =  1 + '2';
console.log( piege); // 12

piege = 1 + 1 + '2';
console.log(piege);  // 22

piege = 2 * '2';
console.log(piege); // 4

piege = 2 * 'deux';
console.log(piege); // NaN -> Not a number




// Boolean
/*
Valeur binaire true ou false

-> Condition
===   -> égalité
!==    -> différence
>     -> supérieur
<     -> inférieur
>=    -> supérieur ou égal
<=    -> inférieur ou égal

falsy
truthy 

*/

let bool = true;
bool = false;

bool = 10 < 20; // true

let x = 2;
let y = '2';


bool = x === y; // false

let y_numb = Number(y);
y_numb = +y; 


bool = isNaN(y_numb); // false
// retourne true si c'est NaN, et false si c'est un nombre;

x = 1;
bool = x < y; // 

console.log(bool);


// && et     
//  ||   ( alt-gr 6 ) ou

bool = x >= 0 && x <= 10; // est-ce que x est compris entre 0 et 10 inclu
// && : les deux conditions doivent être vrai pour retourner true4

let string = 'test';

bool = (string === 'value1') || (string === 'value2' && true);


bool = !bool;

// truthy et falsy

/*
falsy : undefined, null, NaN, false, '' "" ``, 0
truthy -> autres valeurs
*/

let value = '';

bool = value; // ''
bool = !value; // true parce que ! -> condition, est-ce que value est falsy ? Oui -> true
bool = !!value; // false



bool = (value)? true : false;

if(value) {
    console.log('Value est truthy');
    value = 'valeur';
} else {
    console.log('Value est falsy');
}


let foo = 0;

/*
Si foo n'a pas de valeur, alors je lui donne la valeur 'toto', sinon, il garde sa valeur
*/

// Solution 1
if(!foo && foo !== 0) {
    foo = 15;
}


// Solution 2
foo = (!foo && foo !== 0)? 15 : foo;


// Solution 3
foo = ( foo || foo === 0) || 15;

// Si undefined ou null
foo = foo ?? 15;

// Solution 4
foo ??= 15;

// Si foo est truthy, on lui donne une nouvelle valeur

foo = foo && 20;

foo &&= 20;



const day = 'Monday';



switch (day) {
    case 'Monday' :
        console.log('Oh no !');
        break;
    case 'Tuesday' :
        console.log('Meh');
    case 'Wednesday' :
        console.log(`Presque une moitié de faite !`)
        break;
    default : 
        console.log('Deuxième moitié de la semaine');
    case 'Saturday':
    case 'Sunday' :
        console.log('Week End !');
        break;
  
}






