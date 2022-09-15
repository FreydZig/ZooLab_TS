"use strict";
exports.__esModule = true;
exports.Zoo = void 0;
var Enclosure_1 = require("./Enclosure");
var ZooKeeper_1 = require("./Employee/ZooKeeper");
var Veterinarian_1 = require("./Employee/Veterinarian");
var Zoo = /** @class */ (function () {
    function Zoo(location) {
        this.Location = location;
        this.Employees = new Array();
        this.Enclosures = new Array();
    }
    //TODO: Fix with validators
    Zoo.prototype.AddEnclosure = function (name, sqaureFeet) {
        this.Enclosures.push(new Enclosure_1.Enclosure(name, this, sqaureFeet));
    };
    Zoo.prototype.FindAvailableEnclosure = function (animal) {
        var enclosure;
        this.Enclosures.forEach(function (e) {
            if (enclosure == undefined) {
                if (e.Animals.length > 0) {
                    if (e.Animals.every(function (a) { return a.IsFriendlyWith(animal); })) {
                        if (animal.RequiredSpaceSqFt <= e.SquareFeet) {
                            enclosure = e;
                        }
                    }
                }
                else {
                    if (animal.RequiredSpaceSqFt <= e.SquareFeet) {
                        enclosure = e;
                    }
                }
            }
        });
        // @ts-ignore
        return enclosure;
    };
    //TODO: Fix with validators and interfaces
    Zoo.prototype.HireEmployee = function (employee) {
        this.Employees.push(employee);
    };
    Zoo.prototype.FeedAnimals = function (time) {
        var _this = this;
        this.Enclosures.forEach(function (e) {
            e.Animals.forEach(function (a) {
                _this.Employees.forEach(function (em) {
                    if (em instanceof ZooKeeper_1.ZooKeeper) {
                        em.FeedAnimal(a);
                    }
                });
            });
        });
    };
    Zoo.prototype.HeelAnimal = function () {
        var _this = this;
        this.Enclosures.forEach(function (e) {
            e.Animals.forEach(function (a) {
                _this.Employees.forEach(function (em) {
                    if (em instanceof Veterinarian_1.Veterinarian) {
                        em.HeelAnimal(a);
                    }
                });
            });
        });
    };
    return Zoo;
}());
exports.Zoo = Zoo;
