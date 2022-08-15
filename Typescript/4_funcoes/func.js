//função sem retorno 
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function sayHello() {
    console.log('Hello');
}
//callback como argumento
function sayHelloAndReturn(name) {
    return "Hello ".concat(name);
}
function getName(f, userName) {
    var greet = f(userName);
    console.log(greet);
}
getName(sayHelloAndReturn, 'Luccas');
//Generic Types <T> ou <U>
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3, 4, 5]));
console.log(firstElement(['a', 'b', 'c', 'd', 'e']));
function mergeObj(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
//Constraints
function setElement(name) {
    return name;
}
//Argumentos opicionais
function buildName(name, middleName, lastName) {
    if (middleName && lastName) {
        console.log("".concat(name, " ").concat(middleName, " ").concat(lastName));
    }
    else if (middleName && !lastName) {
        console.log("".concat(name, " ").concat(middleName));
    }
    else if (!middleName && lastName) {
        console.log("".concat(name).concat(lastName));
    }
    else {
        console.log(name);
    }
}
buildName('Luccas');
buildName('Luccas', 'Elias');
buildName('Luccas', 'Elias de Almeida dos', 'Santos');
//Parâmetro Default
function soma(a, b) {
    if (b === void 0) { b = 5; }
    return a + b;
}
//type Unknow - para operações complexas de alguns tipos ele deve passar por processo de verificação
function dunno(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === 'number') {
        console.log('X é um numero');
    }
}
//never
function showErrorMessage(x) {
    throw new Error(x);
}
//showErrorMessage('alguma coisa')
//Operador rest
function sumAll() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    var sum = n.reduce(function (i, total) { return i + total; });
    console.log(sum);
}
sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9);
//Destructuring 
function showProdDetail(_a) {
    var name = _a.name, price = _a.price;
    return "".concat(name, " custa R$").concat(price);
}
var camisa = { name: 'Camisa', price: 49.90 };
console.log(showProdDetail(camisa));
