"use strict";
exports.__esModule = true;
exports.Cat = void 0;
var FeedTime_1 = require("./FeedTime");
var ZooKeeper_1 = require("./Employee/ZooKeeper");
var Turtle_1 = require("./Animals/Reptiles/Turtle");
var Snake_1 = require("./Animals/Reptiles/Snake");
var Lion_1 = require("./Animals/Mammal/Lion");
var Penguin_1 = require("./Animals/Birds/Penguin");
var Parrot_1 = require("./Animals/Birds/Parrot");
var Bison_1 = require("./Animals/Mammal/Bison");
var Elephant_1 = require("./Animals/Mammal/Elephant");
var Cat = /** @class */ (function () {
    function Cat(name, color) {
        this.name = name;
        this.color = color;
    }
    Cat.prototype.move = function (distanceMeter) {
        return "".concat(this.name, " moved ").concat(distanceMeter, "m.");
    };
    Cat.prototype.say = function () {
        return "Cat ".concat(this.name, " says meow");
    };
    return Cat;
}());
exports.Cat = Cat;
var cat = new Cat('Tom', 'Black');
function IsFriendlyWith(animal) {
    if ((animal instanceof Snake_1.Snake) && (animal instanceof Turtle_1.Turtle))
        console.log((animal instanceof Snake_1.Snake) && (animal instanceof Turtle_1.Turtle));
    //else throw new Error('ff');
}
var parrot = new Parrot_1.Parrot(5, 'Grass', [new FeedTime_1.FeedTime(new Date(), new ZooKeeper_1.ZooKeeper())], [10], false, 1);
var penguin = new Penguin_1.Penguin(10, 'Vegetable', [new FeedTime_1.FeedTime(new Date(), new ZooKeeper_1.ZooKeeper())], [10], false, 1);
var bison = new Bison_1.Bison(1000, 'Grass', [new FeedTime_1.FeedTime(new Date(), new ZooKeeper_1.ZooKeeper())], [10], false, 1);
var elephant = new Elephant_1.Elephant(1000, 'Vegetable', [new FeedTime_1.FeedTime(new Date(), new ZooKeeper_1.ZooKeeper())], [10], false, 1);
var lion = new Lion_1.Lion(1000, 'Meet', [new FeedTime_1.FeedTime(new Date(), new ZooKeeper_1.ZooKeeper())], [10], false, 1);
var turtle = new Turtle_1.Turtle(5, 'Grass', [new FeedTime_1.FeedTime(new Date(), new ZooKeeper_1.ZooKeeper())], [10], false, 1);
var snake = new Snake_1.Snake(2, 'Meet', [new FeedTime_1.FeedTime(new Date(), new ZooKeeper_1.ZooKeeper())], [10], false, 1);
console.log(snake);
//IsFriendlyWith(turtle);
