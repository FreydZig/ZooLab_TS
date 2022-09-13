import {Animal} from "../Animal"
import {FeedTime} from "../FeedTime";

export abstract class Bird extends Animal{
    constructor(requiredSpaceSqFt : number, favouriteFood : string, isSick: boolean, id: number) {
        super(requiredSpaceSqFt, favouriteFood, isSick, id);
    }
}