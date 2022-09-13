"use strict";
exports.__esModule = true;
exports.ZooKeeper = void 0;
var Parrot_1 = require("../Animals/Birds/Parrot");
var Penguin_1 = require("../Animals/Birds/Penguin");
var Bison_1 = require("../Animals/Mammal/Bison");
var Elephant_1 = require("../Animals/Mammal/Elephant");
var Lion_1 = require("../Animals/Mammal/Lion");
var Snake_1 = require("../Animals/Reptiles/Snake");
var Turtle_1 = require("../Animals/Reptiles/Turtle");
var Grass_1 = require("../Food/Grass");
var Meet_1 = require("../Food/Meet");
var Vegetable_1 = require("../Food/Vegetable");
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper(firstName, lastName, animalExperiences) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.AnimalExperiences = animalExperiences;
    }
    ZooKeeper.prototype.AddAnimalExperiences = function (animal) {
        var _this = this;
        var animals = [Penguin_1.Penguin, Parrot_1.Parrot, Bison_1.Bison, Elephant_1.Elephant, Lion_1.Lion, Snake_1.Snake, Turtle_1.Turtle];
        animals.forEach(function (a) {
            if (animal instanceof a)
                _this.AnimalExperiences = a.name;
        });
        // if(animal instanceof Parrot)
        //     this.AnimalExperiences = Parrot.name;
        // if(animal instanceof Penguin)
        //     this.AnimalExperiences = Penguin.name;
        // if(animal instanceof Bison)
        //     this.AnimalExperiences = Bison.name;
        // if(animal instanceof Elephant)
        //     this.AnimalExperiences = Elephant.name;
        // if(animal instanceof Lion)
        //     this.AnimalExperiences = Lion.name;
        // if(animal instanceof Snake)
        //     this.AnimalExperiences = Snake.name;
        // if(animal instanceof Turtle)
        //     this.AnimalExperiences = Turtle.name;
    };
    ZooKeeper.prototype.HasAnimalExperience = function (animal) {
        var _this = this;
        var animals = [Penguin_1.Penguin, Parrot_1.Parrot, Bison_1.Bison, Elephant_1.Elephant, Lion_1.Lion, Snake_1.Snake, Turtle_1.Turtle];
        var answer = false;
        animals.forEach(function (a) {
            if (animal instanceof a)
                if (_this.AnimalExperiences == a.name)
                    answer = true;
        });
        // if(animal instanceof Parrot)
        //     return this.AnimalExperiences == Parrot.name;
        // if(animal instanceof Penguin)
        //     return this.AnimalExperiences == Penguin.name;
        // if(animal instanceof Bison)
        //     return this.AnimalExperiences == Bison.name;
        // if(animal instanceof Elephant)
        //     return this.AnimalExperiences == Elephant.name;
        // if(animal instanceof Lion)
        //     return this.AnimalExperiences == Lion.name;
        // if(animal instanceof Snake)
        //     return this.AnimalExperiences == Snake.name;
        return answer;
    };
    ZooKeeper.prototype.FeedAnimal = function (animal) {
        var _this = this;
        var foods = [Grass_1.Grass, Meet_1.Meet, Vegetable_1.Vegetable];
        var answer = false;
        if (this.HasAnimalExperience(animal))
            foods.forEach(function (f) {
                if (animal.FavouriteFood == f.name) {
                    animal.Feed(_this);
                    answer = true;
                }
            });
        return answer;
    };
    return ZooKeeper;
}());
exports.ZooKeeper = ZooKeeper;
