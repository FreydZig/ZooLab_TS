"use strict";
exports.__esModule = true;
exports.Animal = void 0;
var FeedTime_1 = require("./FeedTime");
var Animal = /** @class */ (function () {
    function Animal(requiredSpaceSqFt, favouriteFood, feedTimes, feedSchedule, isSick, id) {
        this.RequiredSpaceSqFt = requiredSpaceSqFt;
        this.FavouriteFood = favouriteFood;
        this.FeedTimes = feedTimes;
        this.FeedSchedule = feedSchedule;
        this.IsSick = isSick;
        this.Id = id;
    }
    Animal.prototype.Feed = function (zooKeeper) {
        this.FeedTimes.push(new FeedTime_1.FeedTime(new Date(), zooKeeper));
    };
    ;
    Animal.prototype.AddFeedSchedule = function (hours) {
        //TODO: Add logic FeedSchedule logic
    };
    ;
    Animal.prototype.Heel = function (medicine) {
        this.IsSick = false;
    };
    ;
    return Animal;
}());
exports.Animal = Animal;
