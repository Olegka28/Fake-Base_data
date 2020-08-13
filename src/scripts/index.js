import BaseData from './BD/BD';

const baseData = new BaseData();

const firstBaseData = baseData.model('first');
const secondBaseData = baseData.model('second');
const threeBaseData = baseData.model('three');

firstBaseData.create({
  id: 1,
  completed: false,
  name: 'Oleh',
});

firstBaseData.create({
  id: 2,
  completed: true,
  name: 'Tom',
});

firstBaseData.create({
  id: 3,
  completed: true,
  name: 'Kristina',
});

firstBaseData.create({
  id: 4,
  completed: false,
  name: 'Igor',
});

console.log(firstBaseData.get(4));
console.log(firstBaseData.delete(2));
console.log(firstBaseData.update(1, { name: 'Artur', completed: true }));
console.log(firstBaseData.getState());

console.log(firstBaseData);
console.log(secondBaseData);
console.log(threeBaseData);
console.log(baseData);
