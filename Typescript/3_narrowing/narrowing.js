//type guard
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === 'number') {
        console.log(a + b);
    }
    else {
        console.log('Os valores foram declarados com tipos diferentes um do outro');
        if (typeof a === 'string') {
            a = parseFloat(a);
        }
        if (typeof b === 'string') {
            b = parseFloat(b);
        }
        console.log('Soma : ', a + b);
    }
}
sum(10, 5);
sum('55', '6');
sum(15, '6');
function calculator(val, operation) {
    if (operation === 'sum') {
        var sum_1 = val.reduce(function (i, total) { return i + total; });
        console.log(sum_1);
    }
    else if (operation == 'mult') {
        var mult = val.reduce(function (i, total) { return i * total; });
        console.log(mult);
    }
    else if (operation === 'div') {
        var div = val.reduce(function (i, total) { return i / total; });
        console.log(div.toPrecision(4));
    }
    else {
        console.log('Está operação não existe no sistema');
    }
}
calculator([1, 4, 3], 'sum');
calculator([10, 4, 3], 'mult');
calculator([100, 2, 6], 'div');
//calculator([13,44,31],'sub')
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser(name) {
        return _super.call(this, name) || this;
    }
    return SuperUser;
}(User));
var marcos = new User('Marcos');
var luccas = new SuperUser('Luccas');
console.log(luccas);
console.log(marcos);
function greet(obj) {
    if (obj instanceof SuperUser) {
        console.log('Super Usuário', obj.name);
    }
    else if (obj instanceof User) {
        console.log('Usuário', obj.name);
    }
}
greet(luccas);
greet(marcos);
