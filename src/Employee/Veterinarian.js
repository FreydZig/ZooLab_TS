"use strict";
exports.__esModule = true;
exports.Veterinarian = void 0;
var Penguin_1 = require("../Animals/Birds/Penguin");
var Parrot_1 = require("../Animals/Birds/Parrot");
var Bison_1 = require("../Animals/Mammal/Bison");
var Elephant_1 = require("../Animals/Mammal/Elephant");
var Lion_1 = require("../Animals/Mammal/Lion");
var Snake_1 = require("../Animals/Reptiles/Snake");
var Turtle_1 = require("../Animals/Reptiles/Turtle");
var Antibiotics_1 = require("../Medicines/Antibiotics");
var Veterinarian = /** @class */ (function () {
    function Veterinarian(firstName, lastName, animalExperiences) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.AnimalExperiences = animalExperiences;
    }
    Veterinarian.prototype.AddAnimalExperiences = function (animal) {
        var _this = this;
        var animals = [Penguin_1.Penguin, Parrot_1.Parrot, Bison_1.Bison, Elephant_1.Elephant, Lion_1.Lion, Snake_1.Snake, Turtle_1.Turtle];
        animals.forEach(function (a) {
            if (animal instanceof a)
                _this.AnimalExperiences = a.name;
        });
    };
    Veterinarian.prototype.HasAnimalExperience = function (animal) {
        var _this = this;
        var animals = [Penguin_1.Penguin, Parrot_1.Parrot, Bison_1.Bison, Elephant_1.Elephant, Lion_1.Lion, Snake_1.Snake, Turtle_1.Turtle];
        var answer = false;
        animals.forEach(function (a) {
            if (animal instanceof a)
                if (_this.AnimalExperiences == a.name)
                    answer = true;
        });
        return answer;
    };
    Veterinarian.prototype.HeelAnimal = function (animal) {
        var answer = false;
        if (this.HasAnimalExperience(animal)) {
            animal.Heel(Antibiotics_1.Antibiotics);
            answer = true;
        }
        return answer;
    };
    return Veterinarian;
}());
exports.Veterinarian = Veterinarian;
