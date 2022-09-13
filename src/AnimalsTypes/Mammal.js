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
exports.Mammal = void 0;
var Animal_1 = require("../Animal");
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal(requiredSpaceSqFt, favouriteFood, isSick, id) {
        return _super.call(this, requiredSpaceSqFt, favouriteFood, isSick, id) || this;
    }
    return Mammal;
}(Animal_1.Animal));
exports.Mammal = Mammal;
