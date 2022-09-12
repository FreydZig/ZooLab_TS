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
exports.Bison = void 0;
var Mammal_1 = require("../../AnimalsTypes/Mammal");
var Elephant_1 = require("./Elephant");
var Bison = /** @class */ (function (_super) {
    __extends(Bison, _super);
    function Bison(requiredSpaceSqFt, favouriteFood, feedTimes, feedSchedule, isSick, id) {
        var _this = this;
        if ((requiredSpaceSqFt >= 1000) && (favouriteFood == 'Grass'))
            _this = _super.call(this, requiredSpaceSqFt, favouriteFood, feedTimes, feedSchedule, isSick, id) || this;
        else
            throw new Error('requiredSpaceSqFt < 1000 or/and favouriteFood is not Grass');
        return _this;
    }
    Bison.prototype.IsFriendlyWith = function (animal) {
        return (animal instanceof Elephant_1.Elephant);
    };
    return Bison;
}(Mammal_1.Mammal));
exports.Bison = Bison;
