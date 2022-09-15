"use strict";
exports.__esModule = true;
exports.Enclosure = void 0;
var Enclosure = /** @class */ (function () {
    function Enclosure(name, parentZoo, squareFeet) {
        this.Name = name;
        this.Animals = new Array;
        this.ParentZoo = parentZoo;
        this.SquareFeet = squareFeet;
    }
    Enclosure.prototype.AddAnimal = function (animal) {
        this.Animals.push(animal);
    };
    return Enclosure;
}());
exports.Enclosure = Enclosure;
