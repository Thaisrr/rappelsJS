const user = {
    firstname: 'Jean Michel',
    lastname: 'LaTourte',
    age: 125,
    is_alive: true,
    favorite_food: ['Brocolis', 'Epinards', 'Schweppes Tonic'],
    address: {
        number: 3500,
        street: 'rue des Lilas',
        city: 'Lille'
    },
    sayHello() {
        console.log('Hello ' + this.firstname);
    },
    sayLastName: function() {
        console.log(this)
    },
    sayAge: () => console.log(this)
}

console.log(this); // Window

user.sayAge(); // Window
user.sayLastName(); // user

console.log(  user.firstname  ); // Jean Michel

const name = user.lastname;

user.favorite_food.forEach( (food, index, array) => console.log(`${food}  (beurk)`));

console.log( user.address.city ); // Lille


// Décomposition  // Destructuration

//const firstname = user.firstname;
//const lastname = user.lastname;
//const age = user.age;

const {firstname, lastname, age, toto} = user;

console.log(firstname);
console.log(toto); // undefined -> la propriété n'existe pas dans objet

const {is_alive : vivant} = user // renommer
console.log(vivant);


const {address : {city}} = user;
// const city = user.address.city



const [food1, food2] = user.favorite_food;
/*
const food1 = user.favorite_food[0];
const food2 = user.favorite_food[1];
*/



class Chat {
    nom;
    age;
    couleur;

    constructor(name, age, color) {
        this.nom = name;
        this.age = age;
        this.couleur = color;
    }

    dominerLeMonde() {
        console.log(`${this.nom} dominera le monde, un jour, mais là c'est l'heure des croquettes.`)
    }

}

const cat1 = new Chat('Cactus', 10, 'tabby');
const cat2 = new Chat('Banzaï', 2, 'gris');

cat1.dominerLeMonde();
cat2.dominerLeMonde()