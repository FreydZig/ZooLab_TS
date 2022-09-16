"use strict";
exports.__esModule = true;
exports.ZooConsole = void 0;
var ZooKeeper_1 = require("../ZooLab/Employee/ZooKeeper");
var Veterinarian_1 = require("../ZooLab/Employee/Veterinarian");
var Create_1 = require("./Create");
var ZooApp_1 = require("../ZooLab/ZooApp");
var Zoo_1 = require("../ZooLab/Zoo");
var readline = require("readline");
var ZooConsole = /** @class */ (function () {
    function ZooConsole() {
        this.zooApp = new ZooApp_1.ZooApp();
        this.zoo1 = new Zoo_1.Zoo('Brookline');
        this.zoo2 = new Zoo_1.Zoo('Chicago');
    }
    ZooConsole.prototype.Mein = function () {
        var _this = this;
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('You can: \n 1. Look sick animals \n 2. Look feed animals \n 3. Look employees \n 4. Heel animals \n 5. Feed animals \ 6. Hire employee \n e. Exit \n', function (answer) {
            switch (answer) {
                case '1': {
                    rl.close();
                    return _this.IsSick();
                }
                case '2': {
                    rl.close();
                    return _this.IsFeed();
                }
                case '3': {
                    rl.close();
                    return _this.Employees();
                }
                case '4': {
                    rl.close();
                    return _this.Heel();
                }
                case '5': {
                    rl.close();
                    return _this.Feed();
                }
                case '6': {
                    rl.close();
                    return _this.Hire();
                }
                case 'e': {
                    rl.close();
                    return 0;
                }
                default: {
                    rl.close();
                    console.log('Not available command! \n');
                    return _this.Mein();
                }
            }
        });
        return 0;
    };
    ZooConsole.prototype.Create = function () {
        this.zooApp.AddZoo(this.zoo1);
        this.zooApp.AddZoo(this.zoo2);
        this.zooApp._zoos[0].AddEnclosure('For Parrot', 5);
        this.zooApp._zoos[0].AddEnclosure('For Penguin', 10);
        this.zooApp._zoos[0].AddEnclosure('For Bison', 1000);
        this.zooApp._zoos[0].AddEnclosure('For Elephant', 1000);
        this.zooApp._zoos[0].AddEnclosure('For Lion', 1000);
        this.zooApp._zoos[0].AddEnclosure('For Snake', 2);
        this.zooApp._zoos[0].AddEnclosure('For Turtle', 5);
        this.zooApp._zoos[1].AddEnclosure('For Parrot', 5);
        this.zooApp._zoos[1].AddEnclosure('For Penguin', 10);
        this.zooApp._zoos[1].AddEnclosure('For Bison', 1000);
        this.zooApp._zoos[1].AddEnclosure('For Elephant', 1000);
        this.zooApp._zoos[1].AddEnclosure('For Lion', 1000);
        this.zooApp._zoos[1].AddEnclosure('For Snake', 2);
        this.zooApp._zoos[1].AddEnclosure('For Turtle', 5);
        for (var _i = 0, _a = [0, 1, 2, 3, 4, 5, 6]; _i < _a.length; _i++) {
            var i = _a[_i];
            this.zooApp._zoos[0].Enclosures[i].Animals.push(Create_1.Create.CreateAnimals()[i]);
        }
        for (var _b = 0, _c = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; _b < _c.length; _b++) {
            var i = _c[_b];
            this.zooApp._zoos[0].HireEmployee(Create_1.Create.CreateEmployees()[i]);
        }
        for (var _d = 0, _e = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; _d < _e.length; _d++) {
            var i = _e[_d];
            this.zooApp._zoos[1].HireEmployee(Create_1.Create.CreateEmployees()[i]);
        }
        for (var _f = 0, _g = [0, 1, 2, 3, 4, 5, 6]; _f < _g.length; _f++) {
            var i = _g[_f];
            this.zooApp._zoos[1].Enclosures[i].Animals.push(Create_1.Create.CreateAnimals()[i]);
        }
    };
    ZooConsole.prototype.IsSick = function () {
        this.zooApp._zoos.forEach(function (z) {
            z.Enclosures.forEach(function (e) {
                e.Animals.forEach(function (a) {
                    if (a.IsSick)
                        console.log(a.Id, ' is sick');
                    else
                        console.log(a.Id);
                });
            });
            console.log();
        });
        return this.Mein();
    };
    ZooConsole.prototype.Heel = function () {
        this.zooApp._zoos.forEach(function (z) {
            z.HeelAnimal();
        });
        this.IsSick();
    };
    ZooConsole.prototype.Feed = function () {
        this.zooApp._zoos.forEach(function (z) {
            z.FeedAnimals(new Date());
        });
        return this.IsFeed();
    };
    ZooConsole.prototype.IsFeed = function () {
        this.zooApp._zoos.forEach(function (z) {
            z.Enclosures.forEach(function (e) {
                e.Animals.forEach(function (a) {
                    if (a.FeedTimes.length > 0)
                        console.log(a.Id + ' was feed in ' + a.FeedTimes[a.FeedTimes.length - 1].FeedTime);
                    else
                        console.log(a.Id + ' is hungry');
                });
            });
        });
        return this.Mein();
    };
    ZooConsole.prototype.Employees = function () {
        this.zooApp._zoos.forEach(function (z) {
            z.Employees.forEach(function (e) {
                if (e instanceof Veterinarian_1.Veterinarian)
                    console.log(e.AnimalExperiences);
            });
        });
        return this.Mein();
    };
    ZooConsole.prototype.Hire = function () {
        var _this = this;
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        var i = -1;
        this.zooApp._zoos.forEach(function (z) {
            console.log(z.Location, ++i);
        });
        var zooLoc = 0;
        rl.question('Chose Zoo \n', function (answer) {
            zooLoc = +answer;
            var emp = '';
            rl.question('Chose prof [z/v]: \n', function (answer) {
                emp = answer;
                var firstName = '';
                rl.question('First Name: \n', function (answer) {
                    firstName = answer;
                    var lastName = '';
                    rl.question('last Name: \n', function (answer) {
                        lastName = answer;
                        var animalExperiences = '';
                        rl.question('Animal Experiences: \n', function (answer) {
                            animalExperiences = answer;
                            var employee;
                            if (emp == 'z')
                                employee = new ZooKeeper_1.ZooKeeper(firstName, lastName, animalExperiences);
                            else
                                employee = new Veterinarian_1.Veterinarian(firstName, lastName, animalExperiences);
                            _this.zooApp._zoos[zooLoc].HireEmployee(employee);
                            rl.close();
                            return _this.Employees();
                        });
                        //rl.close();
                    });
                    //rl.close();
                });
                //rl.close();
            });
            //rl.close();
        });
    };
    return ZooConsole;
}());
exports.ZooConsole = ZooConsole;
