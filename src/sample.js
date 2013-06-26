"use strict";
var Person = {};

Person.prototype.name = "Kevin";
Person.prototype.age = 10;

Person.prototype.getName = function () {
    return this.name;
};

Person.prototype.setName = function (newName) {
    if (newName !== "") {
        this.name = newName;
    }
};


var p = new Person();
var p = new Person();
