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
exports.Snake = void 0;
var Reptile_1 = require("../../AnimalsTypes/Reptile");
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(requiredSpaceSqFt, favouriteFood, feedTimes, feedSchedule, isSick, id) {
        var _this = this;
        if ((requiredSpaceSqFt >= 2) && (favouriteFood == 'Meet'))
            _this = _super.call(this, requiredSpaceSqFt, favouriteFood, feedTimes, feedSchedule, isSick, id) || this;
        else
            throw new Error('requiredSpaceSqFt < 2 or/and favouriteFood is not Meet');
        return _this;
    }
    Snake.prototype.IsFriendlyWith = function (animal) {
        return (animal instanceof Snake);
    };
    return Snake;
}(Reptile_1.Reptile));
exports.Snake = Snake;
