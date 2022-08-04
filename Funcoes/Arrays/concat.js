simpleArray = [10, 20, 30, 40, 50];
otherSimpleArray = simpleArray.map(valor => valor + 50);
muchSimplerArray = simpleArray.concat(otherSimpleArray);
console.log(muchSimplerArray)