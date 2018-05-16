const {names, hp, roles} = require('./ow.json');

const getHeros = () => names.map((currentValue, index) => ({name: names[index], role: roles[index], hp: hp[index]}));

const groupBy = (herosArray ,property = 'role') => herosArray.reduce((accumulator, currentValue) => {
  const val = currentValue[property];

  accumulator[val] = accumulator[val] || [];
  accumulator[val].push(currentValue);

  return accumulator;
});

const getByRoles = (...roles) => getHeros().filter(({role}) => roles.includes(role));

let heros = getHeros();

const a = heros.map(hero => {
  hero.sayHello = () => {
    console.log(`Hi, my name is ${hero.name}`);
  };

  return hero;
});

heros[2].sayHello();

