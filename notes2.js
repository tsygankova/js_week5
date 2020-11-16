// система классов для онлайн игры

const Hero = function (name, xp){
    this.name = name,
    this.xp = xp
};

Hero.description = 'this is a hero base class';
console.dir (Hero);

Hero.showStats = function(hero){
    console.log (hero)
}

console.dir (Hero);

Hero.prototype.changeName = function (name){
    this.name = name;
}

const mangostin = new Hero ('Mango', 13);

console.log (mangostin);

//  а теперь на классах

class Superhero {

static description = 'He is a hero'

static showStats = function (hero) {  console.log ('Logging stats from showStats', hero);
}

// constructor (name, xp){
//     this.name = name;
//     this.xp = xp;
// }

// changeName (name){
//     this.name = name;
// }

constructor (name, xp){
    this._name = name;
    this.xp = xp;
}

get name () {
    return this._name
}

set name (newName) {
    this._name = newName;
}

gainXp(amount){
    console.log (`${this.name} получил ${amount} опыта`) 
    this.xp += amount;
}
}

Superhero.descripton = 'He is a hero';
Superhero.showStats = function () {
    console.log (Superhero);
}

console.dir (Superhero);

const mangolier = new Superhero ('Mango', 13);

console.log (mangolier);

mangolier.gainXp (200);

console.log (mangolier);

console.log (mangolier.name)

mangolier.name = 'rakamakaphone';

console.log (mangolier.name);