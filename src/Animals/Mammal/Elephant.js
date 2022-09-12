"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Elephant = void 0;
var Mammal_1 = require("../../AnimalsTypes/Mammal");
var Bison_1 = require("./Bison");
var Parrot_1 = require("../Birds/Parrot");
var Turtle_1 = require("../Reptiles/Turtle");
var Elephant = /** @class */ (function (_super) {
    __extends(Elephant, _super);
    function Elephant(requiredSpaceSqFt, favouriteFood, feedTimes, feedSchedule, isSick, id) {
        var _this = this;
        if ((requiredSpaceSqFt >= 1000) && (favouriteFood == 'Vegetable'))
            _this = _super.call(this, requiredSpaceSqFt, favouriteFood, feedTimes, feedSchedule, isSick, id) || this;
        else
            throw new Error('requiredSpaceSqFt < 1000 or/and favouriteFood is not Vegetable');
        return _this;
    }
    Elephant.prototype.IsFriendlyWith = function (animal) {
        return ((animal instanceof Bison_1.Bison) || (animal instanceof Parrot_1.Parrot) || (animal instanceof Turtle_1.Turtle));
    };
    return Elephant;
}(Mammal_1.Mammal));
exports.Elephant = Elephant;
