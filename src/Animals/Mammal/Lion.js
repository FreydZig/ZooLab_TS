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
exports.Lion = void 0;
var Mammal_1 = require("../../AnimalsTypes/Mammal");
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion(requiredSpaceSqFt, favouriteFood, isSick, id) {
        var _this = this;
        if ((requiredSpaceSqFt >= 1000) && (favouriteFood == 'Meet'))
            _this = _super.call(this, requiredSpaceSqFt, favouriteFood, isSick, id) || this;
        else
            throw new Error('requiredSpaceSqFt < 1000 or/and favouriteFood is not Meet');
        return _this;
    }
    Lion.prototype.IsFriendlyWith = function (animal) {
        return (animal instanceof Lion);
    };
    return Lion;
}(Mammal_1.Mammal));
exports.Lion = Lion;
