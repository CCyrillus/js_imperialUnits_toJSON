
import request1 from './modules/convertRequest.json';
import units from './modules/unitsToApp.js';

const calculator = function (input) {

  let obj = {
    units: input.convert_to,
    value: 0
  };

  let x = input.distance.unit;
  let y = input.distance.value;
  let z = input.convert_to;

  for (const elem of units) {
    if (elem.unit === x) {
      obj.value = elem.value * y;
    }
  }

  for (const elem of units) {
    if (elem.unit === z) {
      obj.value = +(obj.value / elem.value).toFixed(2);
    }
  }


  return JSON.stringify(obj);
}

console.log(calculator(request1));   //npm start






