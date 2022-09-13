"use strict";
exports.__esModule = true;
var Turtle_1 = require("./Animals/Reptiles/Turtle");
var Snake_1 = require("./Animals/Reptiles/Snake");
var Lion_1 = require("./Animals/Mammal/Lion");
var Penguin_1 = require("./Animals/Birds/Penguin");
var Parrot_1 = require("./Animals/Birds/Parrot");
var Bison_1 = require("./Animals/Mammal/Bison");
var Elephant_1 = require("./Animals/Mammal/Elephant");
var Veterinarian_1 = require("./Employee/Veterinarian");
var Enclosure_1 = require("./Enclosure");
var Zoo_1 = require("./Zoo");
var ZooApp_1 = require("./ZooApp");
//
// export class Cat {
//     public name: string;
//     public color: string;
//
//     constructor(name: string, color: string) {
//         this.name = name;
//         this.color = color;
//     }
//
//     public move(distanceMeter: number) : string {
//         return `${this.name} moved ${distanceMeter}m.`;
//     }
//
//     public say() : string {
//         return `Cat ${this.name} says meow`;
//     }
// }
//
// const cat = new Cat('Tom', 'Black');
//
// function IsFriendlyWith(animal: Animal) {
//     if((animal instanceof Snake) && (animal instanceof Turtle))
//     console.log((animal instanceof Snake) && (animal instanceof Turtle))
//     //else throw new Error('ff');
// }
//
var parrot = new Parrot_1.Parrot(4, 'Grass', false, 1);
// const penguin = new Penguin(10, 'Vegetable', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);
// const bison = new Bison(1000, 'Grass', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);
// const elephant = new Elephant(1000, 'Vegetable', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);
// const lion = new Lion(1000, 'Meet', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);
// const turtle = new Turtle(5, 'Grass', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);
var snake = new Snake_1.Snake(2, 'Meet', false, 1);
var animals = [Penguin_1.Penguin, Parrot_1.Parrot, Bison_1.Bison, Elephant_1.Elephant, Lion_1.Lion, Snake_1.Snake, Turtle_1.Turtle];
//const animals = [Penguin, Parrot, Bison, Elephant, Lion, Snake, Turtle];
var b = false;
var veterinarian = new Veterinarian_1.Veterinarian('Bob', 'Faat', 'Snake');
var enclosure = new Enclosure_1.Enclosure('Bisons', new Zoo_1.Zoo('ff'), 4);
var ar;
var zooApp = new ZooApp_1.ZooApp();
console.log(ar);
//IsFriendlyWith(turtle);
