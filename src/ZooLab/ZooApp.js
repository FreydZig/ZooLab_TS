"use strict";
exports.__esModule = true;
exports.ZooApp = void 0;
var ZooApp = /** @class */ (function () {
    function ZooApp() {
        this._zoos = new Array();
    }
    ZooApp.prototype.AddZoo = function (zoo) {
        this._zoos.push(zoo);
    };
    return ZooApp;
}());
exports.ZooApp = ZooApp;
