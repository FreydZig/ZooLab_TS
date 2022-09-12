"use strict";
exports.__esModule = true;
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(requiredSpaceSqFt, favouriteFood, feedTimes, feedSchedule, isSick, id) {
        this.RequiredSpaceSqFt = requiredSpaceSqFt;
        this.FavouriteFood = favouriteFood;
        this.FeedTimes = feedTimes;
        this.FeedSchedule = feedSchedule;
        this.IsSick = isSick;
        this.Id = id;
    }
    //TODO: Add class Food
    Animal.prototype.Feed = function ( /*Food*/) {
        //TODO: Add logic Feed logic
    };
    ;
    Animal.prototype.AddFeedSchedule = function (hours) {
        //TODO: Add logic FeedSchedule logic
    };
    ;
    //TODO: Add class Medicine
    Animal.prototype.Heel = function ( /*Medicine*/) {
        //TODO: Add logic Heel logic
    };
    ;
    return Animal;
}());
exports.Animal = Animal;
