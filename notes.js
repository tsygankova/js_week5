// функции-кострукторы и прототипы наследования

const Manager = function (name, sales){
    this.name = name,
    this.sales = sales
};

Manager.prototype.sell = function (){
    this.sales +=1
};

console.dir (Manager);

const mango = new Manager ('Mango', 5);
console.log (mango);
mango.sell();
console.log (mango);

const poly = new Manager ('Poly', 7)
console.log (poly);
console.log (poly.hasOwnProperty('y'));

// система классов для онлайн игры

const Hero = function (name, xp){
    this.name = name,
    this.xp = xp
};

const mangostin = new Hero ('Mango', 13);

console.log (mangostin);