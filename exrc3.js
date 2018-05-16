const names = ["Doomfist", "Genji", "Mccree", "Pharah", "Reaper", "Soldier-76", "Sombra", "Tracer", "Bastion", "Hanzo", "Junkrat", "Mei", "Windowmaker", "Torbjorn", "D.Va", "Orisa", "Reinhardt", "Roadhog", "Winston", "Zarya", "Ana", "Brigitte", "Lucio", "Mercy", "Moira", "Symmetra", "Zenyatta"];
const hp = ["250", "200", "200", "200", "250", "200", "200", "150", "200", "200", "200", "250", "200", "200", "400", "200", "300", "600", "400", "200", "200", "200", "200", "200", "200", "100", "50"];
const roles = ["Offense", "Offense", "Offense", "Offense", "Offense", "Offense", "Offense", "Offense", "Defense", "Defense", "Defense", "Defense", "Defense", "Defense", "Tank", "Tank", "Tank", "Tank", "Tank", "Tank", "Support", "Support", "Support", "Support", "Support", "Support", "Support"];

const getHeros =()=>{
    var herosArray = [];

    for(var i = 0; i < names.length; i++){
        herosArray.push({'name' : names[i],'role': roles[i],'hp':hp[i]});
    }

    return herosArray;
};

const groupBy = (herosArray ,property = 'role')=>{
    return herosArray.reduce(function(accumulator, currentValue){
        const val = currentValue[property];
        accumulator[val] = accumulator[val] || [];
        accumulator[val].push(currentValue);
        return accumulator;
    });
};

const getByRoles = (herosArray,role)=>{
    return herosArray.filter(hero => hero.role == role);
};

var heros = getHeros();

Object.prototype.sayHello = function sayHello() {
    return "Hi! my name is " + this['name'];
};

console.log(heros[5].sayHello());