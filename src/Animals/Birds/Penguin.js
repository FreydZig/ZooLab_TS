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
exports.Penguin = void 0;
var Bird_1 = require("../../AnimalsTypes/Bird");
var Penguin = /** @class */ (function (_super) {
    __extends(Penguin, _super);
    function Penguin(requiredSpaceSqFt, favouriteFood, feedTimes, feedSchedule, isSick, id) {
        var _this = this;
        if ((requiredSpaceSqFt >= 10) && (favouriteFood == 'Vegetable'))
            _this = _super.call(this, requiredSpaceSqFt, favouriteFood, feedTimes, feedSchedule, isSick, id) || this;
        else
            throw new Error('requiredSpaceSqFt < 9 or/and favouriteFood is not Vegetable');
        return _this;
    }
    Penguin.prototype.IsFriendlyWith = function (animal) {
        return (animal instanceof Penguin);
    };
    return Penguin;
}(Bird_1.Bird));
exports.Penguin = Penguin;
