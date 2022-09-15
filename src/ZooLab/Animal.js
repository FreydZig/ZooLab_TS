"use strict";
exports.__esModule = true;
exports.Animal = void 0;
var FeedTime_1 = require("./FeedTime");
var Animal = /** @class */ (function () {
    function Animal(requiredSpaceSqFt, favouriteFood, id) {
        this.RequiredSpaceSqFt = requiredSpaceSqFt;
        this.FavouriteFood = favouriteFood;
        this.FeedTimes = new Array();
        this.FeedSchedule = new Array();
        this.IsSick = false;
        this.Id = id;
    }
    Animal.prototype.Feed = function (zooKeeper) {
        this.FeedTimes.push(new FeedTime_1.FeedTime(new Date(), zooKeeper));
    };
    ;
    Animal.prototype.AddFeedSchedule = function (hours) {
        this.FeedSchedule.push(hours[0]);
    };
    ;
    Animal.prototype.Heel = function (medicine) {
        this.IsSick = false;
    };
    ;
    return Animal;
}());
exports.Animal = Animal;
