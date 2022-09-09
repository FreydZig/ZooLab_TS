"use strict";
exports.__esModule = true;
var Parrot_1 = require("./Birds/Parrot");
var FeedTime_1 = require("./FeedTime");
var parrot = new Parrot_1.Parrot(5, "Grass", new FeedTime_1.FeedTime(), [1, 1], false, 1);
console.log(parrot.FavouriteFood);
