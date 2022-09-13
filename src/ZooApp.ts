import {Zoo} from "./Zoo";

export class ZooApp{
    _zoos: Array<Zoo>;

    constructor() {
        this._zoos = new Array<Zoo>();
    }

    AddZoo(zoo: Zoo): void{
        this._zoos.push(zoo);
    }
}