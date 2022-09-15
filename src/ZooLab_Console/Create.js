"use strict";
exports.__esModule = true;
exports.Create = void 0;
var Parrot_1 = require("../ZooLab/Animals/Birds/Parrot");
var Penguin_1 = require("../ZooLab/Animals/Birds/Penguin");
var Bison_1 = require("../ZooLab/Animals/Mammal/Bison");
var Elephant_1 = require("../ZooLab/Animals/Mammal/Elephant");
var Lion_1 = require("../ZooLab/Animals/Mammal/Lion");
var Snake_1 = require("../ZooLab/Animals/Reptiles/Snake");
var Turtle_1 = require("../ZooLab/Animals/Reptiles/Turtle");
var ZooKeeper_1 = require("../ZooLab/Employee/ZooKeeper");
var Veterinarian_1 = require("../ZooLab/Employee/Veterinarian");
var Create = /** @class */ (function () {
    function Create() {
    }
    Create.CreateAnimals = function () {
        var parrot = new Parrot_1.Parrot(0);
        var penguin = new Penguin_1.Penguin(1);
        penguin.IsSick = true;
        var bison = new Bison_1.Bison(2);
        var elephant = new Elephant_1.Elephant(3);
        elephant.IsSick = true;
        var lion = new Lion_1.Lion(4);
        var snake = new Snake_1.Snake(5);
        var turtle = new Turtle_1.Turtle(6);
        turtle.IsSick = true;
        return [parrot, penguin, bison, elephant, lion, snake, turtle];
    };
    Create.CreateEmployees = function () {
        var zooKeeperParrot = new ZooKeeper_1.ZooKeeper('Ben', 'Jee', 'Parrot');
        var zooKeeperPenguin = new ZooKeeper_1.ZooKeeper('Ben', 'Jee', 'Penguin');
        var zooKeeperBison = new ZooKeeper_1.ZooKeeper('Ben', 'Jee', 'Bison');
        var zooKeeperLion = new ZooKeeper_1.ZooKeeper('Ben', 'Jee', 'Lion');
        var zooKeeperElephant = new ZooKeeper_1.ZooKeeper('Ben', 'Jee', 'Elephant');
        var veterinarianParrot = new Veterinarian_1.Veterinarian('Ben', 'Jee', 'Parrot');
        var veterinarianPenguin = new Veterinarian_1.Veterinarian('Ben', 'Jee', 'Penguin');
        var veterinarianBison = new Veterinarian_1.Veterinarian('Ben', 'Jee', 'Bison');
        var veterinarianLion = new Veterinarian_1.Veterinarian('Ben', 'Jee', 'Lion');
        var veterinarianElephant = new Veterinarian_1.Veterinarian('Ben', 'Jee', 'Elephant');
        return [zooKeeperParrot, zooKeeperPenguin, zooKeeperBison, zooKeeperLion, zooKeeperElephant,
            veterinarianParrot, veterinarianPenguin, veterinarianBison, veterinarianLion, veterinarianElephant];
    };
    return Create;
}());
exports.Create = Create;
