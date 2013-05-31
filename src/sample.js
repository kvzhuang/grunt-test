var Person = {};

Person.prototype.name = "Kevin";
Person.prototype.age = 10;

Person.prototype.getName = function () {
    return this.name;
};

var p = new Person();
var p = new Person();
