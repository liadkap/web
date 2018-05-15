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

/*const groupBy = (herosArray ,property = 'role')=>{
    var groups = [];
    return herosArray.reduce(function(accumulator, currentValue){
        const val = currentValue[property];

        if (accumulator[val] == undefined) {
            accumulator = accumulator + {val:currentValue};
        }
        else {
            accumulator[val].push(currentValue);
        }
    });
};*/

const groupBy = function(herosArray, property = 'role') {
    return herosArray.reduce(function(result, item) {
        (result[item[property]] = result[item[property]] || []).push(item);
        return result;
    });
};

const getByRoles = (herosArray,role)=>{
    return herosArray.filter(hero => hero.role == role);
};

var heros = getHeros();

console.log(groupBy(heros,'role'));