"use strict";
exports.__esModule = true;
var FeedTime_1 = require("./FeedTime");
var Turtle_1 = require("./Reptiles/Turtle");
var parrot = new Turtle_1.Turtle(5, "Grass", new FeedTime_1.FeedTime(), [1, 1], false, 1);
console.log(parrot.FavouriteFood);
