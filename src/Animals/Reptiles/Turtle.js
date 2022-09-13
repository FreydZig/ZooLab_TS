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
exports.Turtle = void 0;
var Reptile_1 = require("../../AnimalsTypes/Reptile");
var Bison_1 = require("../Mammal/Bison");
var Parrot_1 = require("../Birds/Parrot");
var Elephant_1 = require("../Mammal/Elephant");
var Turtle = /** @class */ (function (_super) {
    __extends(Turtle, _super);
    function Turtle(requiredSpaceSqFt, favouriteFood, isSick, id) {
        var _this = this;
        if ((requiredSpaceSqFt >= 5) && (favouriteFood == 'Grass'))
            _this = _super.call(this, requiredSpaceSqFt, favouriteFood, isSick, id) || this;
        else
            throw new Error('requiredSpaceSqFt < 5 or/and favouriteFood is not Grass');
        return _this;
    }
    Turtle.prototype.IsFriendlyWith = function (animal) {
        return ((animal instanceof Bison_1.Bison) || (animal instanceof Parrot_1.Parrot) || (animal instanceof Elephant_1.Elephant) || (animal instanceof Turtle));
    };
    return Turtle;
}(Reptile_1.Reptile));
exports.Turtle = Turtle;
